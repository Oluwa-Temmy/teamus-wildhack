import {
  MdEmail,
  MdVerified,
  MdPerson,
  MdCalendarToday
} from 'react-icons/md'
import { Container, Card, BackIcon, Avatar, Info, Name, Field } from './style';
import { useAuth0 } from '@auth0/auth0-react'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

export function Profile() {
  const { user, isAuthenticated } = useAuth0()

  if (!isAuthenticated) return null

  const navigate = useNavigate()
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    const rect = card.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * 10
    const rotateY = ((x - centerX) / centerX) * -10

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)'
  }
  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container
      ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Card>
          <BackIcon onClick={() => navigate('/dashboard')}>
            <FaArrowLeft size={24} />
          </BackIcon>

          <Avatar src={user.picture} alt={user.name} />

          <Info>
            <Name>{user.name}</Name>
            <Field><MdPerson /> <span>{user.nickname}</span></Field>
            <Field><MdEmail /> <span>{user.email}</span></Field>
            <Field><MdVerified /> <span>{user.email_verified ? 'Verified' : 'Not verified'}</span></Field>
            <Field><MdCalendarToday /> <span>Updated: {new Date(user.updated_at).toLocaleDateString()}</span></Field>
          </Info>
        </Card>
      </Container>
    </div>
  )
}