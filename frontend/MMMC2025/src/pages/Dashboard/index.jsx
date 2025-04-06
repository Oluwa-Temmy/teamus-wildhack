import { useAuth0 } from '@auth0/auth0-react'
import { Container, Aside, MatchBtn, Loader, LoaderContainer, DashboardCards, Card } from './style' 
import { MdOutlineAdsClick } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { FaBookOpen, FaPlaneDeparture, FaChartLine, FaStar, FaRegThumbsUp, FaBullseye } from 'react-icons/fa'
import goldenCard from '../../assets/golden-card.png'
import { FaRegCreditCard, FaGift } from 'react-icons/fa'
import { FaWallet, FaMoneyBillWave, FaPlane } from 'react-icons/fa'


export function Dashboard(){
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0()

  const navigate = useNavigate()

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    )
  } 

  if (!isAuthenticated) {
    return <button onClick={() => loginWithRedirect()}>Login</button>
  }

  return (
    <Container>
      <Navbar logout={logout} />
      <Aside>
        <h2>Welcome, {user.name}</h2>
        <p>Make a better choice today and own your financial journey.</p>

        <MatchBtn onClick={() => navigate('/match')}>
          Find your perfect match
          <MdOutlineAdsClick />
        </MatchBtn>

        <DashboardCards>
          <Card>
            <h3>My Matches</h3> 
            <h4>Golden Card from NovaBank</h4>
            <img
              src={goldenCard}
              alt="Golden Credit Card"
              style={{ width: '60%', borderRadius: '12px', margin: '10px 0' }}
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaRegThumbsUp size={20} color="#17a2b8" />
              <span>Rewards Overview</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px' }}>
              <FaBullseye size={20} color="#dc3545" />
              <span>Goals</span>
            </div>
          </Card>

          <Card>
            <h3>My Stats</h3>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0' }}>
              <FaChartLine size={20} color="#28a745" />
              <span>Credit Score: <strong>720</strong></span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <FaStar size={20} color="#ffc107" />
              <span>Points: <strong>24,600</strong></span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <FaWallet size={20} color="#007bff" />
              <span>Cards Owned: <strong>3</strong></span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <FaPlane size={20} color="#17a2b8" />
              <span>Miles Available: <strong>1,500</strong></span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaMoneyBillWave size={20} color="#6f42c1" />
              <span>Monthly Spend: <strong>$980</strong></span>
            </div>
            <button style={{
              background: 'none',
              border: 'none',
              color: '#007bff',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontSize: '14px',
              padding: '0'
            }}>
              See more
            </button>
          </Card>


          <Card>
            <h3>Your Mocho Milestones</h3>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px' }}>
              <FaBookOpen size={20} color="#2c7be5" />
              <span>Learned how to earn miles</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <FaPlaneDeparture size={20} color="#f5a623" />
              <span>Earned 100 miles</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <FaRegCreditCard size={20} color="#6f42c1" />
              <span>Matched with your first credit card</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <FaChartLine size={20} color="#20c997" />
              <span>Improved your credit score</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <FaGift size={20} color="#e83e8c" />
              <span>Redeemed your first reward</span>
            </div>

            <button style={{
              background: 'none',
              border: 'none',
              color: '#007bff',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontSize: '14px',
              padding: '0'
            }}>
              See more
            </button>
          </Card>
        </DashboardCards>
      </Aside>
    </Container>
  )
}
