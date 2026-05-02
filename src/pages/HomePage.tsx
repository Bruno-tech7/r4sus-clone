import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { ProblemSection } from '../components/ProblemSection'
import { SolutionSection } from '../components/SolutionSection'
import { ProductsSection } from '../components/ProductsSection'
import { BenefitsSection } from '../components/BenefitsSection'
import { ContactSection } from '../components/ContactSection'

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ProductsSection />
      <BenefitsSection />
      <ContactSection />
    </div>
  )
}
