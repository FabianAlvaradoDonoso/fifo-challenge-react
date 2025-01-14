import { useContext } from 'react'

import { ConfigContext } from './configContext'

// ----------------------------------------------------------------------

export function useConfigContext() {
  const context = useContext(ConfigContext)

  if (!context) {
    throw new Error('useConfigContext: Context must be used inside ConfigProvider')
  }

  return context
}
