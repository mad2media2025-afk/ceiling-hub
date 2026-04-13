import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "JNU Hospital",
      text: "Excellent quality materials and reliable delivery. Highly recommended supplier.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "Fortis Healthcare",
      text: "Great pricing and professional support. Helped us choose the right materials.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      company: "Sterlite Technologies",
      text: "Very dependable supplier with timely delivery and quality products.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-28 bg-gray-50 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What Our Clients Say
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Trusted by businesses across Delhi NCR
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {testimonials.map((testimonial, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition"
            >

              <div className="flex gap-1 mb-4 text-yellow-500">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-gray-700 mb-6">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonial.company}
                </p>
              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
