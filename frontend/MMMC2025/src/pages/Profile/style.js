import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.GOLD};
  color: black;
  padding: 2rem 2.5rem;
  border-radius: 20px;
  position: relative;
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
  max-width: 600px;
  width: 100%;
  transform-origin: center;
  cursor: grab;
  overflow: hidden;

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  transition: transform 0.15s ease-out;
  transform-style: preserve-3d;
  will-change: transform;
`;

export const BackIcon = styled.button`
  top: 1rem;
  left: .1rem;
  background: transparent;
  border: none;
  color: black;
  cursor: pointer;
  transition: 0.2s ease;
  position: absolute;
  
  &:focus {
    outline: none;
  }
  &:hover {
    scale: 1.1;
  }
`

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 4rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const Name = styled.h2`
  margin: 0 0 0.5rem;
`;

export const Field = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  font-size: 0.95rem;
  color: black;
`;
