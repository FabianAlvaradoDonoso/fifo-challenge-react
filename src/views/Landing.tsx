import { Hero } from '@/sections/landing/Hero'
import { Features } from '@/sections/landing/Features'
import { Description } from '@/sections/landing/Description'
import { Technologies } from '@/sections/landing/Technologies'
import { BusinessRules } from '@/sections/landing/BusinessRules'

const LandingPage = () => (
  <>
    <Hero />
    <div className="mx-auto max-w-5xl p-6">
      <Description />
      <Features />
      <Technologies />
      <BusinessRules />
    </div>
  </>
)

export default LandingPage
