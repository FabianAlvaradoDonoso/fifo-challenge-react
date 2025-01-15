import SunIcon from '@/components/icons/sunIcon'
import MoonIcon from '@/components/icons/moonIcon'
import { useConfigContext } from '@/context/config/useConfigContext'

export const ToogleMode = () => {
  const { themeMode, handleTogglethemMode } = useConfigContext()
  return (
    <button onClick={() => handleTogglethemMode()}>
      {themeMode === 'dark' ? (
        <SunIcon width={24} height={24} bg={themeMode === 'dark' ? '#374151' : '#D1D5DB'} />
      ) : (
        <MoonIcon width={24} height={24} bg={themeMode === 'light' ? '#D1D5DB' : '#374151'} />
      )}
    </button>
  )
}
