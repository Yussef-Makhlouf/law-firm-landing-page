import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ArbitrationSection } from "@/components/arbitration-section"
import { EconomicConsultingSection } from "@/components/economic-consulting-section"
import { GallerySection } from "@/components/gallery-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ArbitrationSection />
      <EconomicConsultingSection />
      {/* <TestimonialsSection /> */}
      {/* <GallerySection /> */}
      <CTASection />
      <Footer />
    </main>
  )
}
