"use client";

import { motion } from "framer-motion";

export default function Team() {

  const transition: any = { duration: 0.8, ease: [0, 0, 0.2, 1] };

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: transition },
  };

  return (
    <section id="team" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Team Description */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg border border-gray-200"
        >
          <h2 className="md:text-xl text-base font-bold text-center tracking-[0.08em] text-primary mb-6">Our Team</h2>
          <p className="text-base leading-relaxed text-gray-700 max-w-3xl text-center mx-auto font-medium">
            We are a growing team of highly trained cleaners, space stylists, handymen,
            and maintenance professionals united by a commitment to excellence. Every
            member of our staff is DBS-checked, professionally uniformed, and continually
            trained to stay aligned with industry best practices and safety standards.
            Our shared passion for cleanliness and hospitality ensures every space is
            treated with precision, respect, and exceptional care.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
