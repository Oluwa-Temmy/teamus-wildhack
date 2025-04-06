import { useAuth0 } from '@auth0/auth0-react'
import logoWhite from '../../assets/logo-white.png'
import CardsCTA from '../../assets/cards-cta.png'
import { Container, CallToAction, Nav, Logo, NavRight, NavList, NavItem, NavLink, Button, GoldenButton } from './styles.js'

export function LandingPage() {
  const { loginWithRedirect } = useAuth0()

  return (
    <Container>
      <Nav>
        <Logo src={logoWhite} alt="logo" />
        
        <NavRight>
          <NavList>
            <NavItem><NavLink href="/">Home</NavLink></NavItem>
            <NavItem><NavLink href="/about">About us</NavLink></NavItem>
            <NavItem><NavLink href="/contact">Products</NavLink></NavItem>
            <NavItem><NavLink href="/contact">Contact</NavLink></NavItem>
          </NavList>

          <Button onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>Sign up</Button>
          <Button onClick={() => loginWithRedirect()}>Login</Button>
        </NavRight>
      </Nav>

      <CallToAction>
        <div>
          <p>Unlock your financial potential</p>
          <h1>MAXIMIZE YOUR CREDIT</h1>
          <p>Be on your financial game and discover the best Credit Card Offers for Your Financial Needs. Get Personalized  inter Recommendations Based on Your Credit Score and Spending Habits. Earn Rewards, Manage Miles, and Optimize Your Credit Card Usage</p>
          <GoldenButton onClick={() => loginWithRedirect()}>Get Started</GoldenButton>
        </div>

        <img src={CardsCTA} alt="cards" />
      </CallToAction>
    </Container>
  )
}
