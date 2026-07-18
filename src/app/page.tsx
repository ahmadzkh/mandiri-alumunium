import { HeroSection } from "@/components/sections/hero-section"
import { ServiceGrid } from "@/components/sections/service-grid"
import { PortfolioPreview } from "@/components/sections/portfolio-preview"
import { AreaSection } from "@/components/sections/area-section"
import { TrustSection } from "@/components/sections/trust-section"
import { FinalCtaSection } from "@/components/sections/final-cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceGrid />
      <PortfolioPreview />
      <AreaSection />
      <TrustSection />
      <FinalCtaSection />
    </>
  )
}
