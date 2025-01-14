import type { IConfigContext } from '@/types'

import { useState, createContext } from 'react'

export const ConfigContext = createContext<IConfigContext>({
  themeMode: 'dark',
  handleTogglethemMode: () => {},
})

interface IElement {
  children: JSX.Element | JSX.Element[]
}

export const ConfigProvider = ({ children }: IElement) => {
  const [themeMode, setThemeMode] = useState<'dark' | 'light'>('dark')

  const handleTogglethemMode = () => {
    setThemeMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ConfigContext.Provider
      value={{
        themeMode,
        handleTogglethemMode,
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}
