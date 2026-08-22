"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Services() {
  const services = [
    {
      title: "General & Specified Cleaning",
      description: "Residential and commercial cleaning tailored to your unique space and schedule.",
      image: "/images/resident.png",
    },
    {
      title: "After-Build / Post-Construction Cleaning",
      description: "Thorough cleaning following renovations or construction work, including removal of dust, debris, paint marks, and fine particles—leaving your space safe, fresh, and move-in ready.",
      image: "/images/construction.png",
    },
    {
      title: "Space Maintenance",
      description: "Ongoing upkeep to keep your environment fresh, orderly, and well-presented.",
      image: "/images/clean.png",
    },
    {
      title: "Airbnb Reset & Setup",
      description: "Full turnover and staging support for short-term rental hosts, including: Laundry services, Provision of guest consumables, Replenishment of essentials, Full cleaning and space preparation",
      image: "/images/airbnb.png",
    },
    {
      title: "After-Party & Post-Event Clean-Ups",
      description: "Fast, discreet, and thorough cleaning after private parties, celebrations, and social gatherings.",
      image: "/images/party.png",
    },
    {
      title: "Extra Services",
      description: "Practical maintenance and improvement offerings: Gardening & Outdoor Maintenance, Painting & Repainting, Tile Regrouting, Carpentry Services, Minor Fixes & Aesthetic Improvements",
      image: "/images/outdoor.png",
    },
  ]

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-xl font-bold tracking-[0.08em] text-primary mb-2">What We Do</h2>
          <p className="text-2xl font-bold text-black max-w-2xl mx-auto">
            Comprehensive cleaning and maintenance solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="rounded-xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={663}
                  height={804}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg tracking-[0.08em] font-bold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 tracking-[0.04em] text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-lg bg-gray-50 border-l-4  border-r-4 border-primary">
          <h3 className="text-xl text-center font-bold text-primary mb-8">Why Choose Ecclesiastics Ltd?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Registered & Reliable – Operating under UK best-practice standards",
              "All-in-One Solutions – Cleaning, resetting, and property improvements under one roof",
              "Customisable Services – Tailored to your property type, schedule, and requirements",
              "Trained, Friendly Staff – People who genuinely care about your space",
              "Eco- & Health-Conscious – Safe products that protect both people and the planet",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
