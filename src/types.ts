export interface IAuthStateContext {
  userId: string | null
  userName: string | null
  status: 'checking' | 'authenticated' | 'no-authenticated'
  handleLoginWithGoogle: () => Promise<null | undefined>
  handleLoginWithCredentials: (password: string, email: string) => Promise<null | undefined>
  handleRegisterWithCredentials: (password: string, email: string) => Promise<null | undefined>
  handleLogOut: () => Promise<void>
}

export interface IConfigContext {
  themeMode: 'dark' | 'light'
  handleTogglethemMode: () => void
}

export interface IFifo {
  userId: string
  items: string[]
}

export interface IFifoContext {
  data: IFifo
  setData: React.Dispatch<React.SetStateAction<IFifo>>
  saveItems: (id: string, items: string[]) => Promise<void>
}
