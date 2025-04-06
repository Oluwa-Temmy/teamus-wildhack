import { useNavigate } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import { BackBtn, Header, Title, Subtitle, FormArea, Container, Content } from './style'

export function Match() {
  const navigate = useNavigate()

  return (
    <Container>
      <Content>
        <BackBtn onClick={() => navigate('/dashboard')}>
          <MdArrowBack size={24} />
        </BackBtn>

        <Header>
          <Title>Let’s find your perfect match</Title>
          <Subtitle>Answer a few quick questions and discover the credit card that fits your lifestyle.</Subtitle>
        </Header>

        <FormArea>
          
        </FormArea>
      </Content>
    </Container>
  )
}
