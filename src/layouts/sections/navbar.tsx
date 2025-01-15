import { Link } from 'react-router'
import { useAuthContext } from '@/context/auth/useAuthContext'

export const Navbar = () => {
  const { handleLogOut, userName, userId } = useAuthContext()
  return (
    <nav className="border-gray-200 bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            FIFO Challenge
          </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
            {userId && (
              <>
                <li>
                  <p className="w-full px-5 py-2.5 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    {userName}
                  </p>
                </li>
                <li>
                  <button
                    className="w-full rounded-lg border border-red-700 px-5 py-2.5 text-center text-sm font-medium text-red-700 hover:bg-red-800 hover:text-white dark:border-red-800 dark:text-red-500 dark:hover:bg-red-700 dark:hover:text-white dark:focus:ring-red-800"
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
