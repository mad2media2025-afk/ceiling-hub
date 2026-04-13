/**
 * Centralized Contact Configuration
 * Single source of truth for all contact information
 * Update here to change contact details across the entire project
 */

export const CONTACT = {
  // Phone number (without +91 prefix for WhatsApp links)
  phone: "917678654408",

  // Phone number formatted for display
  phoneDisplay: "+91 7678 654408",

  // Email address
  email: "ceilinghubpvtltd@gmail.com",

  // WhatsApp link (automatically generated)
  whatsapp: "https://wa.me/917678654408",

  // Location
  location: "Gurugram, Haryana",

  /**
   * Generate WhatsApp message link with pre-filled text
   * @param {string} message - The message to send
   * @returns {string} - Complete WhatsApp link
   */
  whatsappMessage: (message) =>
    `https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(message)}`,

  /**
   * Generate product quote WhatsApp link
   * @param {string} productName - Name of the product
   * @returns {string} - WhatsApp link with product inquiry message
   */
  productQuoteLink: (productName) =>
    CONTACT.whatsappMessage(
      `Hello, I am interested in ${productName}. Please share more details and pricing.`
    ),
};
