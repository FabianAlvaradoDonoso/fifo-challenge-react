import type { IAuthStateContext } from '@/types'

import { useNavigate } from 'react-router'
import { useState, useEffect, createContext } from 'react'
import {
  logoutFirebase,
  singInWithGoogle,
  loginWithCredentials,
  onAuthStateHasChanged,
  signInWithCredentials,
} from '@/context/auth/firebase/providers'

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
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateHasChanged(setSession)
  }, [])

  const handleLogOut = async () => {
    logoutFirebase()
    setSession({ userId: null, status: 'no-authenticated' })
    navigate('/')
  }

  const validateAuth = (userId: string | undefined) => {
    if (userId) {
      setSession({ userId, status: 'authenticated' })
      return userId
    } else {
      handleLogOut()
      return null
    }
  }

  const checking = () => setSession((prev) => ({ ...prev, status: 'checking' }))

  const handleLoginWithGoogle = async () => {
    checking()
    const userId = await singInWithGoogle()
    if (validateAuth(userId as string)) {
      navigate('/home')
    } else {
      navigate('/login')
    }
  }

  const handleLoginWithCredentials = async (password: string, email: string) => {
    checking()
    const userId = await loginWithCredentials({ email, password })
    if (validateAuth(userId as string)) {
      navigate('/home')
    } else {
      navigate('/login')
    }
  }

  const handleRegisterWithCredentials = async (password: string, email: string) => {
    checking()
    const userId = await signInWithCredentials({ email, password })
    if (validateAuth(userId as string)) {
      navigate('/home')
    } else {
      navigate('/login')
    }
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
