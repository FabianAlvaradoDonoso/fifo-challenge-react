import { useAuthContext } from '@/context/auth/useAuthContext'

export const HomePage = () => {
  const { userId, handleLogOut } = useAuthContext()

  return (
    <section>
      <h5>
        Your ID is: <span>{userId}</span>
      </h5>
      <button className="btn-logout" onClick={handleLogOut}>
        Log out
      </button>
    </section>
  )
}
