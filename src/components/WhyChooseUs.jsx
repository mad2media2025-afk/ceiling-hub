import React from "react";
import { motion } from "framer-motion";
import {
  FaAward,
  FaTruck,
  FaUsers,
  FaTools,
  FaDollarSign,
  FaShieldAlt
} from "react-icons/fa";

export default function WhyChooseUs() {

  const reasons = [
    {
      icon: <FaAward />,
      title: "15+ Years Experience",
      description: "Extensive experience supplying ceiling systems across residential and commercial projects."
    },
    {
      icon: <FaShieldAlt />,
      title: "Premium Materials",
      description: "We supply certified ceiling boards and insulation materials from trusted manufacturers."
    },
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      description: "Efficient logistics network ensuring quick delivery across Delhi NCR."
    },
    {
      icon: <FaDollarSign />,
      title: "Competitive Pricing",
      description: "Direct supply model allowing competitive pricing without compromising quality."
    },
    {
      icon: <FaUsers />,
      title: "Expert Support",
      description: "Our experienced team helps contractors and architects select the right materials."
    },
    {
      icon: <FaTools />,
      title: "Installation Guidance",
      description: "Technical guidance and installation recommendations for optimal results."
    }
  ];

  return (
    <section id="why-us" className="py-28 bg-gray-50 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose Ceiling Hub
          </h2>

          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Reliable supplier of ceiling materials trusted by contractors,
            builders and architects across Delhi NCR.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {reasons.map((reason, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition"
            >

              <div className="text-blue-600 text-3xl mb-4">
                {reason.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {reason.title}
              </h3>

              <p className="text-gray-600">
                {reason.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}