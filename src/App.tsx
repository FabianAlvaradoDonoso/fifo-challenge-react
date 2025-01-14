import { AuthProvider } from '@/context/auth/authContext'

import { ConfigProvider } from './context/config/configContext'

// ----------------------------------------------------------------------

type AppProps = {
  children: JSX.Element | JSX.Element[]
}

function App({ children }: AppProps) {
  return (
    <ConfigProvider>
      <AuthProvider>
        <div className="min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] bg-repeat">
          {children}
        </div>
      </AuthProvider>
    </ConfigProvider>
  )
}

export default App
