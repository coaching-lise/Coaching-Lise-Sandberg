import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { ServicesTeaser } from "@/components/services-teaser"
import { TestimonialSection } from "@/components/testimonial-section"
import { CtaBanner } from "@/components/cta-banner"

export default function Home() {
  return (
    <div className="front-page">
      <HeroSection />
      <IntroSection />
      <ServicesTeaser />
      <TestimonialSection />
      <CtaBanner />
    </div>
  )
}
