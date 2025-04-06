import { useAuth0 } from '@auth0/auth0-react'
import logoWhite from '../../assets/logo-white.png'
import CardsCTA from '../../assets/cards-cta.png'
import { Container, CallToAction, Nav, Logo, NavRight, NavList, NavItem, ArrowDown, NavLink, Button, GoldenButton } from './styles.js'
import { Section, SectionTitle, SectionSubtext, CardsGrid, Card } from './styles.js'
import { MdChecklist, MdDashboard, MdSchool } from 'react-icons/md'
import GuyReading from '../../assets/guy-reading.png'
import { FaCircleArrowDown } from "react-icons/fa6";

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
      <ArrowDown>
        <FaCircleArrowDown size={55} style={{ color: 'white' }} />
      </ArrowDown>

      <Section light> 
        <SectionTitle style={{ color: 'black' }}>Your Credit Card Companion</SectionTitle>
        <CardsGrid>
          <Card><strong>1.</strong> Take the Quiz</Card>
          <Card><strong>2.</strong> Discover the Best Card</Card>
          <Card><strong>3.</strong> Effortless Reward Management</Card>
          <Card><strong>4.</strong> Increase Your Financial Knowledge</Card>
        </CardsGrid>
      </Section>

      <Section dark>
        <SectionTitle style={{ color: 'white' }}>Become Financially Smarter</SectionTitle>
        <img src={GuyReading} alt="guy reading" />
        <SectionSubtext>
          Discover a fun, modern way to learn the latest financial tools. From credit tips to rewards strategies, our platform makes it simple, interactive, and actually enjoyable.
        </SectionSubtext>
      </Section>

      <Section light>
        <SectionTitle style={{ color: 'black' }}>Choose Where to Start</SectionTitle>
        <CardsGrid>
          <Card>
            <MdChecklist size={32} />
            <h4>Take The Quiz</h4>
            <p>Find the best card match for your goals and profile.</p>
          </Card>
          <Card>
            <MdDashboard size={32} />
            <h4>View Your Dashboard</h4>
            <p>Track rewards, miles, and score progress.</p>
          </Card>
          <Card>
            <MdSchool size={32} />
            <h4>Interactive Learning</h4>
            <p>Boost your knowledge with our guided lessons.</p>
          </Card>
        </CardsGrid>
      </Section>

      <Section dark>
        <p>Project done with 🤍 at Northwestern University's WildHacks 2025</p>
      </Section>
    </Container>
  )
}
