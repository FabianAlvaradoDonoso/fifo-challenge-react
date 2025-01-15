import { Navbar } from '@/layouts/sections/navbar'
import { Footer } from '@/layouts/sections/footer'

export const MainLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
  <div className="flex min-h-screen flex-col">
    <Navbar />
    <main className="container mx-auto flex flex-grow items-center justify-center px-4 py-8">
      {children}
    </main>
    <Footer />
  </div>
)
