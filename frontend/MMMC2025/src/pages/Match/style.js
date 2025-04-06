import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`

export const Content = styled.div`
  padding: 3rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  color: #fff;
  font-family: 'Inter', sans-serif;
`
export const BackBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #fff;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  padding: 0;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #facc15;
  }
`

export const Header = styled.div`
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #cbd5e1;
  margin-top: 0.5rem;
`

export const FormArea = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid rgba(255,255,255,0.1);
  min-height: 400px;
`

export const Placeholder = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #94a3b8;
`
export const InputGroup = styled.div`
  margin-bottom: 1rem;
  margin-top: 1rem;
`