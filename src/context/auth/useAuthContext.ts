import { useContext } from 'react'

import { AuthContext } from './authContext'

// ----------------------------------------------------------------------

export function useAuthContext() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuthContext: Context must be used inside AuthProvider')
  }

  return context
}
