import styled from 'styled-components';

export const Container = styled.div`

`;

export const CallToAction = styled.div`
  display: flex;

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
    margin: 0 50px;
    height: calc(100vh - 78px);
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
