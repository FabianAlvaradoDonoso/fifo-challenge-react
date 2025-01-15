import type { User } from 'firebase/auth'
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

const initialState: Pick<IAuthStateContext, 'status' | 'userId' | 'userName'> = {
  userId: null,
  userName: null,
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
    setSession({ userId: null, status: 'no-authenticated', userName: null })
    navigate('/')
  }

  const validateAuth = (user: User | null) => {
    if (user?.uid) {
      setSession({ userId: user.uid, status: 'authenticated', userName: user.displayName })
      return user.uid
    } else {
      handleLogOut()
      return null
    }
  }

  const checking = () => setSession((prev) => ({ ...prev, status: 'checking' }))

  const handleLoginWithGoogle = async () => {
    checking()
    const user = await singInWithGoogle()
    if (validateAuth(user)) {
      navigate('/home')
    }

    return null
  }

  const handleLoginWithCredentials = async (password: string, email: string) => {
    checking()
    const user = await loginWithCredentials({ email, password })
    if (validateAuth(user)) {
      navigate('/home')
    }
    return null
  }

  const handleRegisterWithCredentials = async (password: string, email: string) => {
    checking()
    const user = await signInWithCredentials({ email, password })
    if (validateAuth(user)) {
      navigate('/home')
    }
    return null
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
