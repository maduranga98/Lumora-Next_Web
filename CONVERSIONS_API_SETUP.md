# Facebook Conversions API Setup

This document explains the Facebook Conversions API integration implemented for tracking user interactions on the Lumora Ventures website.

## Overview

The Facebook Conversions API allows tracking of user events server-side or client-side for better attribution and ad optimization. This implementation tracks three main events:

1. **ViewContent** - When users view key pages
2. **Lead** - When users submit contact/consultation forms
3. **CompleteRegistration** - When users complete subscription signup

## Configuration

### Environment Variables

Add the following environment variables to your `.env.local` file:

```bash
# Facebook Conversions API
NEXT_PUBLIC_FB_PIXEL_ID=your_facebook_pixel_id
NEXT_PUBLIC_FB_ACCESS_TOKEN=your_facebook_access_token
```

**Note:** The access token provided should be kept secure. For production, consider using Facebook's Event Test Tool to verify events are being received correctly.

### Your Credentials

Your Facebook Conversions API Access Token has been set up with the following value:
```
EAAW60ZABbOWcBQmxpo3Xnj1tZA2yg6ECQH9JpJ1uncb9rVyPBe8YQloHoF4jKTmnL7kn7wS1XAmXir0uZAoLsoLCERqMA1MDT8ZBh4d2LtoyPhsjgNY35wZAlJRpfwlP9ausVplwWsjgbh1PLRrZCQkDIZCkMYGVgiwjP2jI1twdcYv9JlBpjos3dYK8nFFevZCiMgZDZD
```

## Implementation

### Core Files

1. **`app/lib/conversionsApi.js`** - Core utility functions for tracking events
   - `trackViewContent()` - Track page views
   - `trackLead()` - Track lead submissions
   - `trackCompleteRegistration()` - Track completed registrations
   - Data hashing (SHA-256) for user privacy

2. **`app/lib/usePageView.js`** - React hook for easy page view tracking

### Event Tracking Locations

#### ViewContent Events
Tracked on the following pages:
- Homepage (`/`) - "Lumora Ventures Homepage"
- Google My Business page (`/google-my-business`) - "Google Business Profile Management Services"
- Payment page (`/gmb-service-payments`) - "GBP Service Payment Page"

#### Lead Events
Tracked in the following forms:
- Homepage contact form - "Homepage Contact Lead"
- Google My Business contact form - "Google My Business Lead"
- Curl Cipher consultation form - "Curl Cipher Lead - [Service]"

#### CompleteRegistration Events
Tracked when:
- User completes subscription payment for GBP service ($150 value)

## Data Privacy

All user data (email, phone, names) is hashed using SHA-256 before being sent to Facebook, following privacy best practices.

The implementation includes:
- Email normalization (lowercase, trim)
- SHA-256 hashing
- Phone number hashing
- First and last name hashing

## Event Payload Structure

Example payload sent to Facebook:

```json
{
  "data": [{
    "event_name": "Lead",
    "event_time": 1769691023,
    "action_source": "website",
    "event_source_url": "https://www.lumoraventures.com/contact",
    "user_data": {
      "em": ["7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0fd30c2fc2fc068"],
      "ph": [null],
      "fn": ["hashedfirstname"],
      "ln": ["hashedlastname"],
      "client_user_agent": "Mozilla/5.0...",
      "fbc": "_fbc_cookie_value",
      "fbp": "_fbp_cookie_value"
    },
    "custom_data": {
      "content_name": "Homepage Contact Lead",
      "currency": "USD",
      "value": 0
    }
  }]
}
```

## Testing

### Test Events

To verify the implementation:

1. **Facebook Events Manager**
   - Go to Events Manager in Facebook Business Manager
   - Select your Pixel
   - View "Test Events" tab
   - Events should appear in real-time

2. **Browser Console**
   - Open browser developer console
   - Look for conversion tracking logs (in development)
   - Check for any error messages

### Manual Testing Steps

1. **ViewContent**: Navigate to homepage or GMB page
2. **Lead**: Submit any contact form
3. **CompleteRegistration**: Complete a subscription payment

## API Endpoint

Events are sent to:
```
https://graph.facebook.com/v18.0/{PIXEL_ID}/events
```

## Troubleshooting

### Common Issues

1. **Events not showing in Facebook**
   - Verify `NEXT_PUBLIC_FB_PIXEL_ID` is correct
   - Check `NEXT_PUBLIC_FB_ACCESS_TOKEN` is valid
   - Ensure access token has proper permissions

2. **Console Errors**
   - Check browser console for error messages
   - Verify environment variables are loaded
   - Ensure functions are imported correctly

3. **Hashing Issues**
   - Verify Web Crypto API is available (requires HTTPS in production)
   - Check data is normalized before hashing

## Future Enhancements

Potential improvements:
- Add Purchase event tracking for paid services
- Implement AddToCart for service selection
- Add InitiateCheckout before payment
- Track custom events for specific user actions
- Add server-side API route for enhanced security

## Support

For issues or questions:
- Email: info@lumoraventures.com
- Reference: [Facebook Conversions API Documentation](https://developers.facebook.com/docs/marketing-api/conversions-api)
