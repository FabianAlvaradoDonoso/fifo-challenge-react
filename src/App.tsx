import { Toaster } from 'sonner'
import { ThemeProvider } from '@/components/theme-provider'

// ----------------------------------------------------------------------

type AppProps = {
  children: JSX.Element | JSX.Element[]
}

function App({ children }: AppProps) {
  return (
    <ThemeProvider>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-black dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)]">
        {children}
        <Toaster richColors position="bottom-right" />
      </div>
    </ThemeProvider>
  )
}
export default App
