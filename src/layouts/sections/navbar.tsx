import { Link } from 'react-router'
import { ModeToggle } from '@/components/mode-toggle'

export const Navbar = () => (
  <nav className="border-gray-200 bg-transparent">
    <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center p-4 md:justify-between">
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-gray-300">
          Wallbit Challenge
        </span>
      </Link>
      <div className="flex items-center md:block md:w-auto" id="navbar-default">
        <ModeToggle />
      </div>
    </div>
  </nav>
)
