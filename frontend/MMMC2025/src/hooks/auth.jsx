import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router-dom'
import { Loader, LoaderContainer } from './style.js'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    )
  } 

  return isAuthenticated ? children : <Navigate to="/" />
}

export default ProtectedRoute
