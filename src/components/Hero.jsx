import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { scrollToSection } from "../utils/scrollToSection";

export default function Hero() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleViewProducts = () => {
    navigate("/products");
  };

  const handleGetQuote = () => {
    // If already on home page, scroll directly
    if (location.pathname === "/") {
      scrollToSection("contact");
    } else {
      // Otherwise navigate to home and then scroll
      navigate("/");
      setTimeout(() => {
        scrollToSection("contact");
      }, 100);
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white pt-24"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Premium Ceiling Systems <br />
          <span className="text-blue-400">For Modern Spaces</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-gray-200 mt-6 max-w-2xl mx-auto"
        >
          Trusted supplier of gypsum boards, insulation materials and
          acoustic ceiling systems across Delhi NCR.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <button
            onClick={handleViewProducts}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
          >
            View Products <FaArrowRight />
          </button>

          <button
            onClick={handleGetQuote}
            className="border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition"
          >
            Get Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}