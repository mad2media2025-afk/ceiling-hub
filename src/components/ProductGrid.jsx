import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductGrid({ products = [] }) {
  return (
    <section className="py-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

        {products.map((product, index) => {
          const image = product?.images?.[0] || "";

          return (
            <motion.div
              key={product?.id ?? index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >

              {image ? (
                <img
                  src={image}
                  alt={product?.name ?? "Product"}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200" />
              )}

              <div className="p-6">

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product?.name ?? "Product"}
                </h3>

                <p className="text-gray-600 mb-4">
                  {product?.description ?? ""}
                </p>

                <ul className="space-y-1 mb-5 text-sm text-gray-700">
                  {(product?.features ?? []).map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>

                <Link
                  to={`/product/${product?.id}`}
                  className="block text-center w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Learn More
                </Link>

              </div>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}