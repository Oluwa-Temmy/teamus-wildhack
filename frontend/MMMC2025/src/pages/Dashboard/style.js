import styled from "styled-components"


export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 200px; 
  background-color: #f8f9fa; 
  padding: 20px; 
  height: 100vh; 
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
`;

export const Logo = styled.img`
  width: 40%; 
  margin-bottom: 20px; 
`;

export const Aside = styled.div`
  margin: 40px; 
  width: calc(100vw - 280px);

  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    font-size: 21px;
  }
`;

export const QuizBtn = styled.button`
  background-color: ${({ theme }) => theme.COLORS.GOLD};
  color: black;
  text-transform: uppercase;
  
  padding: 20px;
  font-size: 21px;
  width: 100%;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: #fef8f2;
    scale: 1.01;
  }
`;
