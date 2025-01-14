import SunIcon from '@/components/icons/sunIcon'
import MoonIcon from '@/components/icons/moonIcon'
import { useConfigContext } from '@/context/config/useConfigContext'

export const MainLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const { themeMode, handleTogglethemMode } = useConfigContext()
  return (
    <>
      {children}
      <button className="absolute bottom-5 right-5" onClick={handleTogglethemMode}>
        {themeMode === 'dark' ? (
          <SunIcon bg="#fff" width={20} height={20} />
        ) : (
          <MoonIcon bg="#fff" width={20} height={20} />
        )}
      </button>
    </>
  )
}
