"use client";

import { motion } from "framer-motion";
import {
  FaSwimmingPool,
  FaUtensils,
  FaSpa,
  FaWifi,
  FaCar,
  FaDumbbell,
} from "react-icons/fa";

const facilities = [
  {
    icon: <FaSwimmingPool size={40} />,
    title: "Infinity Pool",
    desc: "Relax and enjoy our rooftop infinity pool with panoramic views of the skyline.",
  },
  {
    icon: <FaUtensils size={40} />,
    title: "Fine Dining",
    desc: "Experience world-class cuisine prepared by our top chefs using the finest ingredients.",
  },
  {
    icon: <FaSpa size={40} />,
    title: "Luxury Spa",
    desc: "Indulge yourself with premium spa treatments to rejuvenate body and soul.",
  },
  {
    icon: <FaWifi size={40} />,
    title: "High-Speed WiFi",
    desc: "Stay connected with ultra-fast WiFi available throughout the hotel.",
  },
  {
    icon: <FaCar size={40} />,
    title: "Private Parking",
    desc: "Spacious, secure, and convenient parking facilities for all guests.",
  },
  {
    icon: <FaDumbbell size={40} />,
    title: "Modern Gym",
    desc: "Stay fit during your stay with our state-of-the-art fitness equipment.",
  },
];

const Facilities = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tight"
        >
          Our <span className="text-orange-500">Facilities</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Discover premium facilities that make every moment of your stay comfortable,
          relaxing, and unforgettable. Designed with elegance and crafted for perfection.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white shadow-md hover:shadow-xl rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 border border-gray-100"
            >
              <div className="text-orange-500 mb-5">{facility.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{facility.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {facility.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
