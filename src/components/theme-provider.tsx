import type { IThemeContext } from '@/types'

import { useState, useContext, createContext } from 'react'

export const ThemeContext = createContext<IThemeContext>({
  theme: 'dark',
  handleThemeMode: () => {},
})

interface IElement {
  children: JSX.Element | JSX.Element[]
}

export const ThemeProvider = ({ children }: IElement) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  const handleThemeMode = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    document.body.classList.toggle('dark')
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleThemeMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useThemeContext: Context must be used inside ConfigProvider')
  }

  return context
}
