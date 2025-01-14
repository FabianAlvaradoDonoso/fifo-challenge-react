export interface IAuthStateContext {
  userId: string | null
  status: 'checking' | 'authenticated' | 'no-authenticated'
  handleLoginWithGoogle: () => Promise<void>
  handleLoginWithCredentials: (password: string, email: string) => Promise<void>
  handleRegisterWithCredentials: (password: string, email: string) => Promise<void>
  handleLogOut: () => Promise<void>
}

export interface IConfigContext {
  themeMode: 'dark' | 'light'
  handleTogglethemMode: () => void
}
