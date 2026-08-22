"use client"

import BookingModal from "./booking-modal"

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-20 pb-20 flex items-center"
      style={{
        backgroundImage: "url(/images/hero.png)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col justify-center items-center text-center">
          {/* Text Content */}
          <div className="max-w-2xl">
            <p className="text-base font-semibold text-white mb-3 tracking-widest uppercase">
              Professional Cleaning
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Clean. Fresh. Better Living.
            </h1>

            <p className="text-base text-white/90 leading-relaxed mb-8">
              Premium eco‑friendly cleaning for homes and businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <BookingModal
                className="bg-primary cursor-pointer text-white px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-colors text-center"
              >
                Book Consultation
        </BookingModal>
              <button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="border cursor-pointer border-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                View Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
