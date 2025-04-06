import { useAuth0 } from '@auth0/auth0-react'

export function LandingPage() {
  const { loginWithRedirect } = useAuth0()

  return (
    <>
      <h1>My money my choice</h1>

      <button
        onClick={() => loginWithRedirect()}
      >
        Sign in
      </button>

      <button
        onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
      >
        Sign up
      </button>
    </>
  )
}
