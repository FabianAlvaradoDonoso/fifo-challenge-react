import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuthContext } from '@/context/auth/useAuthContext'

export const AuthLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const router = useNavigate()

  const { status } = useAuthContext()

  const [isChecking, setIsChecking] = useState<boolean>(true)

  const checkPermissions = async (): Promise<void> => {
    if (status === 'checking') {
      return
    }

    if (status === 'no-authenticated') {
      router('/login')
      setIsChecking(false)
    }

    if (status === 'authenticated') {
      router('/home')
    }

    setIsChecking(false)
  }

  useEffect(() => {
    checkPermissions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  if (isChecking) {
    return <>Cargando ...</>
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-8">
      <Link
        to="/"
        className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
      >
        FIFO Challenge React
      </Link>
      {children}
    </div>
  )
}
