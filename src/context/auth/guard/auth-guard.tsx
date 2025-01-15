import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
import SpinnerIcon from '@/components/icons/spinnerIcon'
import { useAuthContext } from '@/context/auth/useAuthContext'

type GuardProps = {
  children: React.ReactNode
}

export function AuthGuard({ children }: GuardProps) {
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
    return (
      <div className="flex h-screen items-center justify-center space-x-1 text-center">
        <div role="status" className="flex flex-col items-center space-y-2">
          <SpinnerIcon />
          <span className="text-xl">Loading...</span>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
