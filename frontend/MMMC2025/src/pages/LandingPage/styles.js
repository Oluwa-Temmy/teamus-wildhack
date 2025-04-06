import styled from 'styled-components';

export const Container = styled.div`
  font-size: 18px;
`;

export const CallToAction = styled.div`
  display: flex;
  position: relative;
  height: calc(100vh - 78px);

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
    margin: 0 50px;
  }

  p {
    font-size: 25px;
  }

  img {
    width: 40%;
    height: auto;
    margin-right: 40px;
  }
`;

export const ArrowDown = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  animation: bounce 1.2s infinite;

  @keyframes bounce {
    0%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-50%) translateY(10px);
    }
  }
`;

export const Nav = styled.nav`
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: rgba(250, 246, 243, 0.29);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.7px);
  -webkit-backdrop-filter: blur(10.7px);
`;

export const Logo = styled.img`
  height: 40px;
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: ${({ theme }) => theme.COLORS.GOLD};
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 20px;
  width: max-content;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.GOLD};
    color: black;
    scale: 1.1;
  }
`;

export const GoldenButton = styled.button`
  background-color: ${({ theme }) => theme.COLORS.GOLD};
  color: black;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 20px;
  width: max-content;

  &:hover {
    scale: 1.1;
  }
`;

export const Section = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ light, dark }) =>
    light ? '#f9f9f9' : dark ? '#1e293b' : '#fff'};
  text-align: center;
`

export const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`

export const SectionSubtext = styled.p`
  max-width: 600px;
  margin: 0 auto;
  color: #cbd5e1;
  font-size: 1.1rem;
  font-size: 20px;
`

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

export const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0,0,0,0.05);
  text-align: left;
  color: black;
  font-size: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  strong {
    font-size: 2rem;
    background-color: ${({ theme }) => theme.COLORS.GOLD};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    box-shadow: 0 4px 16px rgba(0,0,0,0.05);
  }

  h4 {
    margin-top: 1rem;
    font-weight: 600;
    font-size: 20px;
  }

  p {
    font-size: 18px;
    color: #4b5563;
  }
`
