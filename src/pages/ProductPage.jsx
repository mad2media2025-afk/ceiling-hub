import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { products } from "../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { CONTACT } from "../config/contact";
import { usePageMeta } from "../hooks/usePageMeta";

export default function ProductPage() {

  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  // SEO Meta Tags
  if (product) {
    usePageMeta(
      product.name,
      `${product.description} - Features: ${product.features.join(", ")}`,
      `https://ceilinghub.in/product/${id}`
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div className="p-20 text-center">Product not found</div>;
  }

  const [activeImage, setActiveImage] = useState(product.images[0]);

  const whatsappLink = CONTACT.productQuoteLink(product.name);

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-20 px-6 bg-gray-50 min-h-screen flex items-start">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Image Gallery */}
          <div>

            <div className="overflow-hidden rounded-xl shadow-lg mb-4">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-96 object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <div className="flex gap-4">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="thumbnail"
                  onClick={() => setActiveImage(img)}
                  className={`w-24 h-24 object-cover rounded-lg cursor-pointer border 
                  ${activeImage === img ? "border-blue-600" : "border-gray-300"}`}
                />
              ))}
            </div>

          </div>

          {/* Details */}
          <div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            <p className="text-gray-600 mb-6">
              {product.description}
            </p>

            <h3 className="font-semibold mb-3 text-lg">
              Key Features
            </h3>

            <ul className="space-y-2 mb-8">
              {product.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>

            {product.applications && (
              <>
                <h3 className="font-semibold mb-3 text-lg mt-8">
                  Applications
                </h3>

                <ul className="grid grid-cols-2 gap-2 mb-8">
                  {product.applications.map((app, i) => (
                    <li key={i}>• {app}</li>
                  ))}
                </ul>
              </>
            )}

            {product.specifications && (
              <div className="mb-10">
                <h3 className="font-semibold mb-4 text-lg">
                  Technical Specifications
                </h3>

                <div className="overflow-hidden rounded-lg border">
                  <table className="w-full text-sm">
                    <tbody>
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <tr key={key} className="border-b">
                          <td className="bg-gray-50 px-4 py-3 font-medium">
                            {key}
                          </td>
                          <td className="px-4 py-3">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-600 transition"
            >
              Get Quote on WhatsApp
            </a>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}