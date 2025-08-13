import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="fixed inset-0 z-0 opacity-30">
        <iframe
          src="https://my.spline.design/interactiveaiassistant-tuivGUt92Pq0J3bkztHJHCQe/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10">
        <Header />
        <main className="pt-16">
          <HeroSection />
          <ServicesSection />
          <ContactSection />
        </main>
      </div>
    </div>
  )
}
