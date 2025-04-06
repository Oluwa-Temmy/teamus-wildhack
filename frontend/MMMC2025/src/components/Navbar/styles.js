import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 200px; 
  background-color: #f8f9fa; 
  padding: 20px; 
  height: 100vh; 

  position: fixed;
  left: 0;
  top: 0;
`;

export const NavItem = styled.button`
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  text-align: left;
  width: 100%;
  color: ${({ theme }) => theme.COLORS.DARKBLUE};
  font-size: 18px;

  display: flex;
  align-items: center;
  gap: 10px;
  
  &:hover {
    background-color: #fef8f2;
    scale: 1.05;
  }

  &:focus {
    border: none;
    outline: none;
  }
`;

export const Logo = styled.img`
  width: 40%; 
  margin-bottom: 20px; 
`;
