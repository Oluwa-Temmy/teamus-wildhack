import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh; 
  overflow: hidden;
`

export const PageContainer = styled.div`
  margin-left: 200px; 
  padding: 40px;
  height: 100vh;
  overflow-y: auto;
  width: calc(100% - 200px); 
  
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    font-size: 21px;
  }
`

export const Header = styled.header`
  text-align: center;
  margin-bottom: 4rem;
`

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: #facc15;
`

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #94a3b8;
  margin-top: 0.5rem;
`

export const ContentSection = styled.section`
  margin-bottom: 3.5rem;
`

export const IconTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;

  h2 {
    font-size: 1.5rem;
    margin: 0;
    color: #e2e8f0;
  }
`

export const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #cbd5e1;
`

export const List = styled.ul`
  margin-top: 1rem;
  padding-left: 1.2rem;
  font-size: 1.05rem;

  li {
    margin-bottom: 0.75rem;
  }
`

export const Quote = styled.div`
  background: #facc15;
  color: #1e293b;
  font-weight: 600;
  padding: 1.25rem 2rem;
  border-radius: 12px;
  text-align: center;
  font-size: 1.1rem;
  margin-top: 4rem;
`
