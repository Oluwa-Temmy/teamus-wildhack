import { useAuth0 } from '@auth0/auth0-react'
import { Container, Navbar, NavItem, Logo, Aside, MatchBtn, Loader, LoaderContainer } from './style' 
import LogoBlack from '../../assets/logo-black.png'
import { MdDashboard } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import { MdSportsScore } from "react-icons/md";
import { FaPlane } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAdsClick } from "react-icons/md";
import { useNavigate } from 'react-router-dom'

export function Dashboard(){
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    )
  } 

  const navigate = useNavigate()

  return (
    !isAuthenticated ? (
      <button onClick={() => loginWithRedirect()}>Login</button>
    ) : (
      <Container>
        <Navbar>
          <Logo src={LogoBlack} alt="Logo" />
          <NavItem onClick={() => navigate('/dashboard')}>
            <MdDashboard />
            Dashboard
          </NavItem>
          <NavItem>
            <FaRegCreditCard />
            Cards
          </NavItem>
          <NavItem>
            <MdSportsScore />
            Scores
          </NavItem>
          <NavItem>
            <FaPlane />
            Miles
          </NavItem>
          <div style={{ marginTop: 'auto', width: '100%' }}>
            <NavItem onClick={() => navigate('/profile')}>
              <CgProfile />
              Profile
            </NavItem>
            <NavItem onClick={() => logout({ returnTo: window.location.origin })}>
              <IoMdLogOut />
              Logout
            </NavItem>
          </div>
        </Navbar>
        
        <Aside>
          <h2>Welcome, {user.name}</h2>
          <p>Make a better choice today and own your financial journey.</p>

          <MatchBtn onClick={() => navigate('/match')}>
            Find your perfect match
            <MdOutlineAdsClick />
          </MatchBtn>
        </Aside>
      </Container>
    )
  )
}