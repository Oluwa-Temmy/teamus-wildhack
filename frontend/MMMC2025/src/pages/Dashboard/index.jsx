import { useAuth0 } from '@auth0/auth0-react'
import { Card } from '../../components/Card/index.jsx'

export function Dashboard(){
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Login</button>
      ) : (
        <>
          <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
          <h2>Welcome, {user.name}</h2>
          <div>
            
          </div>
        </>
      )}
    </div>
  )
}