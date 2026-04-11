import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you! We will contact you soon.");
  };

  return (
    <section id="contact" className="py-28 bg-white px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Left Info */}
        <div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Request a Quote
          </h2>

          <p className="text-gray-600 text-lg mb-10">
            Looking for premium ceiling materials or insulation systems?
            Contact our team and we will help you choose the right solution.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>📍 Gurugram, Haryana</p>
            <p>📞 +91 96786 54408</p>
            <p>✉️ ceilinghubpvtltd@gmail.com</p>
          </div>

        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 bg-gray-50 p-8 rounded-xl"
        >

          <input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md focus:border-blue-600 outline-none"
          />

          <div className="grid md:grid-cols-2 gap-4">

            <input
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="p-3 border rounded-md outline-none"
            />

            <input
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 border rounded-md outline-none"
            />

          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="Project details..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-md outline-none"
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition">
            Send Inquiry
          </button>

        </motion.form>

      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition"
      >
        <FaWhatsapp size={26}/>
      </a>

    </section>
  );
}