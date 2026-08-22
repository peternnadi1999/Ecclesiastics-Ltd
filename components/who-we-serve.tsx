"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const services = [
  { title: "Homeowners & Tenants", image: "/modern-home-living-room-clean-interior.jpg" },
  { title: "Property Managers", image: "/residential-apartment-building-exterior.jpg" },
  { title: "Airbnb & Short-Term Rental Hosts", image: "/luxury-airbnb-vacation-rental-bedroom.jpg" },
  { title: "Small Offices & Commercial Units", image: "/modern-office-workspace-desk.jpg" },
  { title: "Developers & Landlords", image: "/construction-site-development-property.jpg" },
  { title: "Real Estate Agencies", image: "/real-estate-office-professional.jpg" },
  { title: "Private Clients After Parties & Gatherings", image: "/event-venue-party-space-celebration.jpg" },
]

export default function WhoWeServe() {
  return (
    <section className="py-6 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="md:text-xl text-base font-bold tracking-[0.08em] text-primary mb-2">Who We Service</h2>
          <p className="md:text-2xl font-bold text-black max-w-2xl mx-auto">
            Ecclesiastics Ltd serves a diverse range of clients across the UK
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative h-56 md:h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl 
                         transition-shadow group"
            >
              {/* Image wrapper */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-[900ms] ease-out 
                             group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/40" />

              {/* Title */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <h3 className="text-base md:text-xl font-bold text-white text-center">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
