"use client";

import { motion } from "framer-motion";

export default function EcoCommitment() {
  // Different fade-in directions
  const fadeLeft = { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
  const fadeUp = { hidden: { opacity: 0, y: 60 }, show: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const fadeRight = { hidden: { opacity: 0, x: 60 }, show: { opacity: 1, x: 0, transition: { duration: 0.8 } } };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="md:text-xl text-sm font-bold tracking-[0.08em] text-primary mb-2">
            Our Eco-Friendly Commitment
          </h2>
          <p className="md:text-2xl text-base font-bold text-black max-w-2xl mx-auto">
            We proudly use eco-friendly, non-toxic, and biodegradable cleaning
            products wherever possible, benefiting both our team and your
            property’s occupants.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Occupants */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="p-8 rounded-lg bg-white border border-gray-200"
          >
            <h3 className="text-xl font-bold text-primary mb-2">For Occupants</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Improved indoor air quality</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Reduced exposure to harsh chemicals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Safer for children, pets, and allergy-sensitive individuals</span>
              </li>
            </ul>
          </motion.div>

          {/* Staff */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="p-8 rounded-lg bg-white border border-gray-200"
          >
            <h3 className="text-xl font-bold text-primary mb-2">For Our Staff</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Lower risk of respiratory irritation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Safer handling during cleaning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>More comfortable working conditions</span>
              </li>
            </ul>
          </motion.div>

          {/* Property */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="p-8 rounded-lg bg-white border border-gray-200"
          >
            <h3 className="text-xl font-bold text-primary mb-2">For Your Property</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Surfaces cleaned without damage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Long-term preservation of materials</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Extended finishes lifespan</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
