import { useContext } from 'react'

import { FifoContext } from './fifoContext'

// ----------------------------------------------------------------------

export function useFifoContext() {
  const context = useContext(FifoContext)

  if (!context) {
    throw new Error('useFifoContext: Context must be used inside FifoProvider')
  }

  return context
}
