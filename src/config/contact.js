/**
 * Centralized Contact Configuration
 * Single source of truth for all contact information
 * Update here to change contact details across the entire project
 */

export const CONTACT = {
  // Primary phone numbers
  phones: [
    { number: "917678654408", display: "+91 76786 54408" },
    { number: "919625109477", display: "+91 96251 09477" },
    { number: "917065657604", display: "+91 70656 57604" }
  ],

  // Primary phone number (for backward compatibility)
  phone: "917678654408",

  // Phone number formatted for display (for backward compatibility)
  phoneDisplay: "+91 76786 54408",

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
