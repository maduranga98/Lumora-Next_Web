/**
 * Facebook Conversions API Utility
 * Tracks ViewContent, Lead, and CompleteRegistration events
 */

/**
 * Hash data using SHA-256
 * @param {string} data - Data to hash
 * @returns {Promise<string>} Hashed data in hex format
 */
async function hashData(data) {
  if (!data) return null;

  // Normalize the data (lowercase, trim whitespace)
  const normalized = data.toLowerCase().trim();

  // Create hash using Web Crypto API
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(normalized);
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);

  // Convert to hex string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  return hashHex;
}

/**
 * Send event to Facebook Conversions API
 * @param {Object} eventData - Event data to send
 * @returns {Promise<Object>} API response
 */
async function sendConversionEvent(eventData) {
  const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
  const accessToken = process.env.NEXT_PUBLIC_FB_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    console.warn('Facebook Conversions API credentials not configured');
    return { success: false, error: 'Missing credentials' };
  }

  const url = `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [eventData]
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Facebook Conversions API error:', result);
      return { success: false, error: result };
    }

    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending conversion event:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Track ViewContent event
 * @param {Object} params - Event parameters
 * @param {string} params.contentName - Name of the content viewed
 * @param {string} params.contentCategory - Category of the content
 * @param {string} params.contentIds - Array of content IDs
 * @param {number} params.value - Value of the content (optional)
 * @param {string} params.currency - Currency code (default: USD)
 */
export async function trackViewContent({
  contentName,
  contentCategory,
  contentIds = [],
  value = 0,
  currency = 'USD'
}) {
  const eventData = {
    event_name: 'ViewContent',
    event_time: Math.floor(Date.now() / 1000),
    action_source: 'website',
    event_source_url: typeof window !== 'undefined' ? window.location.href : '',
    user_data: {
      client_ip_address: '',
      client_user_agent: typeof window !== 'undefined' ? navigator.userAgent : '',
      fbc: typeof window !== 'undefined' ? getCookie('_fbc') : null,
      fbp: typeof window !== 'undefined' ? getCookie('_fbp') : null,
    },
    custom_data: {
      content_name: contentName,
      content_category: contentCategory,
      content_ids: contentIds,
      currency: currency,
      value: value,
    }
  };

  return await sendConversionEvent(eventData);
}

/**
 * Track Lead event
 * @param {Object} params - Event parameters
 * @param {string} params.email - User email
 * @param {string} params.phone - User phone number (optional)
 * @param {string} params.firstName - User first name (optional)
 * @param {string} params.lastName - User last name (optional)
 * @param {number} params.value - Value of the lead (optional)
 * @param {string} params.currency - Currency code (default: USD)
 * @param {string} params.contentName - Content name (optional)
 */
export async function trackLead({
  email,
  phone = null,
  firstName = null,
  lastName = null,
  value = 0,
  currency = 'USD',
  contentName = 'Contact Form'
}) {
  const userData = {
    client_ip_address: '',
    client_user_agent: typeof window !== 'undefined' ? navigator.userAgent : '',
    fbc: typeof window !== 'undefined' ? getCookie('_fbc') : null,
    fbp: typeof window !== 'undefined' ? getCookie('_fbp') : null,
  };

  // Hash user data
  if (email) {
    userData.em = [await hashData(email)];
  }

  if (phone) {
    userData.ph = [await hashData(phone)];
  }

  if (firstName) {
    userData.fn = [await hashData(firstName)];
  }

  if (lastName) {
    userData.ln = [await hashData(lastName)];
  }

  const eventData = {
    event_name: 'Lead',
    event_time: Math.floor(Date.now() / 1000),
    action_source: 'website',
    event_source_url: typeof window !== 'undefined' ? window.location.href : '',
    user_data: userData,
    custom_data: {
      content_name: contentName,
      currency: currency,
      value: value,
    }
  };

  return await sendConversionEvent(eventData);
}

/**
 * Track CompleteRegistration event
 * @param {Object} params - Event parameters
 * @param {string} params.email - User email
 * @param {string} params.phone - User phone number (optional)
 * @param {string} params.firstName - User first name (optional)
 * @param {string} params.lastName - User last name (optional)
 * @param {number} params.value - Value of the registration (optional)
 * @param {string} params.currency - Currency code (default: USD)
 * @param {string} params.status - Registration status (optional)
 */
export async function trackCompleteRegistration({
  email,
  phone = null,
  firstName = null,
  lastName = null,
  value = 0,
  currency = 'USD',
  status = 'completed'
}) {
  const userData = {
    client_ip_address: '',
    client_user_agent: typeof window !== 'undefined' ? navigator.userAgent : '',
    fbc: typeof window !== 'undefined' ? getCookie('_fbc') : null,
    fbp: typeof window !== 'undefined' ? getCookie('_fbp') : null,
  };

  // Hash user data
  if (email) {
    userData.em = [await hashData(email)];
  }

  if (phone) {
    userData.ph = [await hashData(phone)];
  }

  if (firstName) {
    userData.fn = [await hashData(firstName)];
  }

  if (lastName) {
    userData.ln = [await hashData(lastName)];
  }

  const eventData = {
    event_name: 'CompleteRegistration',
    event_time: Math.floor(Date.now() / 1000),
    action_source: 'website',
    event_source_url: typeof window !== 'undefined' ? window.location.href : '',
    user_data: userData,
    custom_data: {
      status: status,
      currency: currency,
      value: value,
    }
  };

  return await sendConversionEvent(eventData);
}

/**
 * Get cookie value by name
 * @param {string} name - Cookie name
 * @returns {string|null} Cookie value
 */
function getCookie(name) {
  if (typeof document === 'undefined') return null;

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }

  return null;
}
