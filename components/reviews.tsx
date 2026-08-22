"use client"

import { ExternalLink, Star } from "lucide-react"
import { motion } from "framer-motion"

const googleBusinessProfileUrl = "https://www.google.com/search?q=Ecclesiastics+Ltd+reviews"

const reviews = [
  {
    quote:
      "Professional, thorough, and genuinely thoughtful. The whole space felt transformed when they finished.",
    name: "Homeowner",
    detail: "Residential cleaning",
  },
  {
    quote:
      "Reliable from booking to completion. The attention to detail made our property ready for guests straight away.",
    name: "Property host",
    detail: "Airbnb reset service",
  },
  {
    quote:
      "A friendly team who took real care with our office. Everything was spotless, fresh, and beautifully presented.",
    name: "Business client",
    detail: "Commercial cleaning",
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-[#fbf8f4] py-20">
      <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Google Business Profile
            </p>
            <h2 className="font-display text-4xl font-semibold leading-tight text-[#191919] md:text-5xl">
              Clean spaces. Happy customers.
            </h2>
          </div>
          <a
            href={googleBusinessProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 border-b-2 border-primary pb-1 font-semibold text-primary transition-colors hover:text-primary/70"
          >
            View us on Google
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.figure
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex min-h-64 flex-col justify-between border border-[#e8ddd3] bg-white p-7 shadow-[0_12px_30px_rgba(65,32,15,0.06)]"
            >
              <div>
                <div className="mb-5 flex gap-1 text-secondary" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="font-display text-2xl leading-snug text-[#292929]">
                  “{review.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-8 border-t border-[#eee5dd] pt-4">
                <p className="font-semibold text-[#191919]">{review.name}</p>
                <p className="text-sm text-gray-500">{review.detail}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}