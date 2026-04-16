import { useEffect } from 'react';

/**
 * Hook to manage dynamic meta tags for each page
 * @param {string} title - Page title
 * @param {string} description - Page meta description
 * @param {string} url - Full URL of the page
 * @param {string} imageUrl - URL for og:image (optional)
 */
export const usePageMeta = (title, description, url, imageUrl = 'https://ceilinghub.in/og-image.jpg') => {
  useEffect(() => {
    // Update title
    document.title = title ? `${title} | CeilingHub` : 'CeilingHub - Premium Ceiling & Insulation Materials';

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'Premium ceiling and insulation materials for residential, commercial, and industrial spaces.');
    }

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = url;

    // Update Open Graph tags
    updateOrCreateMetaTag('og:title', title ? `${title} | CeilingHub` : 'CeilingHub - Premium Ceiling & Insulation Materials', 'property');
    updateOrCreateMetaTag('og:description', description || 'Premium ceiling and insulation materials for residential, commercial, and industrial spaces.', 'property');
    updateOrCreateMetaTag('og:url', url, 'property');
    updateOrCreateMetaTag('og:image', imageUrl, 'property');

    // Update Twitter Card tags
    updateOrCreateMetaTag('twitter:title', title ? `${title} | CeilingHub` : 'CeilingHub - Premium Ceiling & Insulation Materials', 'property');
    updateOrCreateMetaTag('twitter:description', description || 'Premium ceiling and insulation materials for residential, commercial, and industrial spaces.', 'property');
    updateOrCreateMetaTag('twitter:image', imageUrl, 'property');

    // Scroll to top
    window.scrollTo(0, 0);

  }, [title, description, url, imageUrl]);
};

/**
 * Helper function to update or create meta tags
 */
function updateOrCreateMetaTag(property, content, attribute = 'name') {
  let metaTag = document.querySelector(`meta[${attribute}="${property}"]`);
  
  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.setAttribute(attribute, property);
    document.head.appendChild(metaTag);
  }
  
  metaTag.setAttribute('content', content);
}
