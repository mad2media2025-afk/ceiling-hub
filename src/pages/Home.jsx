import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import Industries from "../components/Industries";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { handleAnchorScroll } from "../utils/scrollToSection";

import { products } from "../data/products";

export default function Home() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      handleAnchorScroll(location.hash);
    } else if (location.pathname === "/") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="bg-white overflow-x-hidden">

      <Navbar />

      <Hero />

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Our Products
            </h2>

            <p className="text-gray-600 mt-4">
              High-performance ceiling and insulation materials for residential,
              commercial and industrial spaces.
            </p>
          </div>

          <ProductGrid products={products.slice(0,6)} />

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Explore More Products
            </Link>
          </div>

        </div>

      </section>

      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <Contact />
      <Footer />

    </div>
  );
}