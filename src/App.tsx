import { Toaster } from 'sonner'
import { AuthProvider } from '@/context/auth/authContext'

import { FifoProvider } from './context/fifo/fifoContext'
import { ConfigProvider } from './context/config/configContext'

// ----------------------------------------------------------------------

type AppProps = {
  children: JSX.Element | JSX.Element[]
}

function App({ children }: AppProps) {
  return (
    <ConfigProvider>
      <AuthProvider>
        <FifoProvider>
          <div className="min-h-screen bg-[#ffffff] bg-[radial-gradient(#00000033_1px,#ffffff_1px)] bg-[size:20px_20px] bg-repeat dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)]">
            {children}
            <Toaster richColors position="bottom-right" />
          </div>
        </FifoProvider>
      </AuthProvider>
    </ConfigProvider>
  )
}

export default App
