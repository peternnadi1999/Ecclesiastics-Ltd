import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Team from "@/components/team"
import EcoCommitment from "@/components/eco-commitment"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import AboutUs from "@/components/about-us"
import WhoWeServe from "@/components/who-we-serve"
import ScrollToTop from "@/components/scroll-to-top"
import Reviews from "@/components/reviews"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <AboutUs/>
      <Services />
      <EcoCommitment />
      <Team />
      <WhoWeServe/>
      <CTA />
      <Reviews/>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
