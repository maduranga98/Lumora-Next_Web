/**
 * Custom hook for tracking page views with Facebook Conversions API
 */

import { useEffect } from 'react';
import { trackViewContent } from './conversionsApi';

/**
 * Track page view when component mounts
 * @param {Object} params - Tracking parameters
 * @param {string} params.contentName - Name of the page/content
 * @param {string} params.contentCategory - Category of the content
 * @param {string[]} params.contentIds - Array of content IDs (optional)
 * @param {number} params.value - Value of the page view (optional)
 */
export function usePageView({
  contentName,
  contentCategory,
  contentIds = [],
  value = 0
}) {
  useEffect(() => {
    // Track view content when component mounts
    const trackPage = async () => {
      try {
        await trackViewContent({
          contentName,
          contentCategory,
          contentIds,
          value,
          currency: 'USD'
        });
      } catch (error) {
        console.warn('Page view tracking failed:', error);
      }
    };

    trackPage();
  }, [contentName, contentCategory]); // Only re-track if these change
}
