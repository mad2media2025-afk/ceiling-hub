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

import { products } from "../data/products";

export default function Home() {

  const location = useLocation();

  // Smooth scroll when navigating with anchors like /#products
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="bg-white overflow-x-hidden">

      <Navbar />

      <Hero />

      {/* Products Section */}
      <section id="products">

        {/* Show only 6 products on homepage */}
        <ProductGrid products={products.slice(0, 6)} />

        {/* Explore More Button */}
        <div className="text-center mt-14 mb-10">

          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Explore More Products
          </Link>

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