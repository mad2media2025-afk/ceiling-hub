import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link
            to="/"
            onClick={handleHomeClick}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Ceiling Hub"
              className="h-10 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium">

            <Link
              to="/"
              onClick={handleHomeClick}
              className="hover:text-blue-600 transition"
            >
              Home
            </Link>

            <a
              href="/#products"
              className="hover:text-blue-600 transition"
            >
              Products
            </a>

            <a
              href="/#why-us"
              className="hover:text-blue-600 transition"
            >
              Why Us
            </a>

            <a
              href="/#testimonials"
              className="hover:text-blue-600 transition"
            >
              Testimonials
            </a>

            {/* FIXED SUPPORT */}
            <Link
              to="/support"
              className="hover:text-blue-600 transition"
            >
              Support
            </Link>

          </div>

          {/* Get Quote Button */}
          <a
            href="/#contact"
            className="hidden md:block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Get Quote
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 flex flex-col gap-4 text-gray-700 font-medium">

            <Link to="/" onClick={handleHomeClick}>
              Home
            </Link>

            <a href="/#products" onClick={closeMenu}>
              Products
            </a>

            <a href="/#why-us" onClick={closeMenu}>
              Why Us
            </a>

            <a href="/#testimonials" onClick={closeMenu}>
              Testimonials
            </a>

            {/* FIXED SUPPORT */}
            <Link to="/support" onClick={closeMenu}>
              Support
            </Link>

            <a
              href="/#contact"
              onClick={closeMenu}
              className="bg-blue-600 text-white py-3 rounded-md text-center"
            >
              Get Quote
            </a>

          </div>
        )}

      </div>
    </nav>
  );
}