import { Navbar } from '@/sections/layout/navbar'

export const MainLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
  <>
    <Navbar />
    {children}
  </>
)
