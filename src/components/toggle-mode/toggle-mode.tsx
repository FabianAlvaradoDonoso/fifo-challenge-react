import SunIcon from '@/components/icons/sunIcon'
import MoonIcon from '@/components/icons/moonIcon'
import { useConfigContext } from '@/context/config/useConfigContext'

export const ToogleMode = () => {
  const { themeMode, handleTogglethemMode } = useConfigContext()
  return (
    <button
      onClick={() => handleTogglethemMode()}
      className="rounded-lg border p-3 text-center text-sm font-medium dark:border-gray-600 dark:text-gray-300"
    >
      {themeMode === 'dark' ? (
        <SunIcon width={24} height={24} bg={themeMode === 'dark' ? '#374151' : '#D1D5DB'} />
      ) : (
        <MoonIcon width={24} height={24} bg={themeMode === 'light' ? '#D1D5DB' : '#374151'} />
      )}
    </button>
  )
}
