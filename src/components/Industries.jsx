import React from "react";
import { motion } from "framer-motion";
import {
  FaHospital,
  FaSchool,
  FaBuilding,
  FaShoppingBag,
  FaHotel,
  FaIndustry
} from "react-icons/fa";

export default function Industries() {

  const industries = [
    { icon: <FaHospital />, name: "Healthcare", description: "Hospitals and medical facilities" },
    { icon: <FaSchool />, name: "Education", description: "Schools and universities" },
    { icon: <FaBuilding />, name: "Corporate", description: "Office spaces and workplaces" },
    { icon: <FaShoppingBag />, name: "Retail", description: "Shopping complexes and stores" },
    { icon: <FaHotel />, name: "Hospitality", description: "Hotels and hospitality spaces" },
    { icon: <FaIndustry />, name: "Industrial", description: "Factories and industrial units" }
  ];

  return (
    <section className="py-28 bg-white px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Industries We Serve
          </h2>

          <p className="text-gray-600 text-lg mt-4">
            Ceiling solutions for multiple industries across Delhi NCR
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {industries.map((industry, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border rounded-xl p-10 text-center hover:shadow-lg transition"
            >

              <div className="text-4xl text-blue-600 mb-4">
                {industry.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {industry.name}
              </h3>

              <p className="text-gray-600">
                {industry.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}