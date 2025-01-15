import { Link } from 'react-router'
import { useAuthContext } from '@/context/auth/useAuthContext'
import { ToogleMode } from '@/components/toggle-mode/toggle-mode'

export const Navbar = () => {
  const { handleLogOut, userName, userId } = useAuthContext()
  return (
    <nav className="border-gray-200 bg-white shadow dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center p-4 md:justify-between">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-gray-300">
            FIFO Challenge
          </span>
        </Link>
        <div className="md:block md:w-auto" id="navbar-default">
          <ul className="flex w-full flex-col space-x-8 rounded-lg border-0 bg-white p-0 text-center font-medium sm:flex-row rtl:space-x-reverse dark:bg-gray-900">
            {userId && (
              <>
                <li>
                  <p className="w-full px-5 py-2.5 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    {userName}
                  </p>
                </li>
                <li>
                  <p className="w-full px-5 py-2.5 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    <ToogleMode />
                  </p>
                </li>
                <li>
                  <button
                    className="w-full rounded-lg border border-red-500 px-5 py-2.5 text-center text-sm font-medium text-red-500 hover:bg-red-800 hover:text-white dark:border-red-800 dark:text-red-500 dark:hover:bg-red-700 dark:hover:text-white dark:focus:ring-red-800"
                    onClick={handleLogOut}
                  >
                    Log out
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
