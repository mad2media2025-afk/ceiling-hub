/**
 * Scrolls to a specific section by ID with smooth behavior
 * @param {string} sectionId - The ID of the section (without #)
 */
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

/**
 * Handles smooth scrolling for anchor links
 * Works for both same-page and cross-page navigation
 * @param {string} hash - The hash from URL (e.g., "#products")
 */
export const handleAnchorScroll = (hash) => {
  if (!hash) return;
  
  const sectionId = hash.replace("#", "");
  
  // Small delay to ensure DOM is ready if navigating from another page
  setTimeout(() => {
    scrollToSection(sectionId);
  }, 100);
};
