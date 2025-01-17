import { useTheme } from '@/components/theme-provider'

import SunIcon from './icons/sunIcon'
import MoonIcon from './icons/moonIcon'

export function ModeToggle() {
  const { handleThemeMode, theme } = useTheme()

  return (
    <button
      onClick={() => handleThemeMode()}
      className="border-primary rounded-lg border p-2 text-center text-sm font-medium"
    >
      {theme === 'dark' ? (
        <SunIcon width={20} fill="white" />
      ) : (
        <MoonIcon width={20} fill="black" />
      )}
    </button>
  )
}
