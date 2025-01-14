import type { IAuthStateContext } from '@/types'

import { useState, useEffect, createContext } from 'react'
import {
  logoutFirebase,
  singInWithGoogle,
  loginWithCredentials,
  onAuthStateHasChanged,
  signInWithCredentials,
} from '@/firebase/providers'

export const AuthContext = createContext<IAuthStateContext | undefined>(undefined)

const initialState: Pick<IAuthStateContext, 'status' | 'userId'> = {
  userId: null,
  status: 'checking',
}

interface IElement {
  children: JSX.Element | JSX.Element[]
}

export const AuthProvider = ({ children }: IElement) => {
  const [session, setSession] = useState(initialState)

  useEffect(() => {
    onAuthStateHasChanged(setSession)
  }, [])

  const handleLogOut = async () => {
    logoutFirebase()
    setSession({ userId: null, status: 'no-authenticated' })
  }

  const validateAuth = (userId: string | undefined) => {
    if (userId) return setSession({ userId, status: 'authenticated' })
    handleLogOut()
    return null
  }

  const checking = () => setSession((prev) => ({ ...prev, status: 'checking' }))

  const handleLoginWithGoogle = async () => {
    checking()
    const userId = await singInWithGoogle()
    validateAuth(userId as string)
  }

  const handleLoginWithCredentials = async (password: string, email: string) => {
    checking()
    const userId = await loginWithCredentials({ email, password })
    validateAuth(userId as string)
  }

  const handleRegisterWithCredentials = async (password: string, email: string) => {
    checking()
    const userId = await signInWithCredentials({ email, password })
    validateAuth(userId as string)
  }

  return (
    <AuthContext.Provider
      value={{
        ...session,
        handleLoginWithGoogle,
        handleLoginWithCredentials,
        handleRegisterWithCredentials,
        handleLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
