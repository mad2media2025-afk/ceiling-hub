import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CONTACT } from "../config/contact";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-20 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Company */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Ceiling Hub
          </h3>

          <p>
            Supplier of premium ceiling boards and insulation materials
            across Delhi NCR.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2">
            <li><a href="#products" className="hover:text-white transition">Products</a></li>
            <li><a href="#why-us" className="hover:text-white transition">Why Choose Us</a></li>
            <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Products
          </h4>

          <ul className="space-y-2">
            <li>Gypsum Boards</li>
            <li>Cement Fibre Boards</li>
            <li>Rockwool Insulation</li>
            <li>Glasswool Insulation</li>
            <li>Bison Boards</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Contact
          </h4>

          <div className="space-y-3 text-gray-400">

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400"/>
              <span>{CONTACT.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaPhone className="text-blue-400"/>
              <a
                href={`tel:${CONTACT.phone}`}
                className="hover:text-white transition"
              >
                {CONTACT.phoneDisplay}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400"/>
              <a
                href={`mailto:${CONTACT.email}`}
                className="hover:text-white transition"
              >
                {CONTACT.email}
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center">

        <p className="text-sm text-gray-400">
          © {year} Ceiling Hub Pvt Ltd. All rights reserved.
        </p>

        <div className="flex gap-4 mt-4 md:mt-0">

          <a href="#" className="text-gray-400 hover:text-blue-400 transition">
            <FaFacebook size={18}/>
          </a>

          <a href="#" className="text-gray-400 hover:text-blue-400 transition">
            <FaLinkedin size={18}/>
          </a>

          <a href="#" className="text-gray-400 hover:text-blue-400 transition">
            <FaTwitter size={18}/>
          </a>

        </div>

      </div>

    </footer>
  );
}