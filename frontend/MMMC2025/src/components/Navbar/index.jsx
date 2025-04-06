import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDashboard, MdSportsScore } from 'react-icons/md';
import { FaRegCreditCard, FaPlane } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { IoMdLogOut } from 'react-icons/io';
import LogoBlack from '../../assets/logo-black.png';

import { Navbar as StyledNavbar, NavItem, Logo } from './styles';

const Navbar = ({ logout }) => {
  const navigate = useNavigate();

  return (
    <StyledNavbar>
      <Logo src={LogoBlack} alt="Logo" />

      <NavItem onClick={() => navigate('/dashboard')}>
        <MdDashboard />
        Dashboard
      </NavItem>

      <NavItem onClick={() => navigate('/cards')}>
        <FaRegCreditCard />
        Credit Cards
      </NavItem>

      <NavItem onClick={() => navigate('/scores')}>
        <MdSportsScore />
        Scores
      </NavItem>

      <NavItem onClick={() => navigate('/miles')}>
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
    </StyledNavbar>
  );
};

export default Navbar;
