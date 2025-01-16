import { Hero } from '@/sections/landing/Hero'
import { Features } from '@/sections/landing/Features'
import { Description } from '@/sections/landing/Description'
import { Technologies } from '@/sections/landing/Technologies'
import { BusinessRules } from '@/sections/landing/BusinessRules'

const IndexPage = () => (
  <>
    <Hero />
    <div className="mx-auto max-w-5xl p-6">
      <Description />
      <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
      <Features />
      <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
      <Technologies />
      <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
      <BusinessRules />
    </div>
  </>
)

export default IndexPage
