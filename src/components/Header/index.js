import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import Cart from '../../assets/cart.svg'
import Person from '../../assets/person.svg'
import { useUser } from '../../hooks/UserContext'

import {
  Container,
  ContainerLeft,
  ContainerRight,
  PageLink,
  Line,
  ContainerText,
  PageLinkExit
} from './styles'

export function Header() {
  const { logout, userData } = useUser()
  const navigate = useNavigate()
  const location = useLocation()

  const logoutUser = () => {
    logout()
    navigate('/')
  }

  return (
    <Container>
      <ContainerLeft>
        <PageLink
          onClick={() => navigate('/home')}
          $isActive={location.pathname === '/home'}
        >
          Home
        </PageLink>
        <PageLink
          onClick={() => navigate('/produtos')}
          $isActive={location.pathname.includes('produtos')}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink
          onClick={() => navigate('/carrinho')}
          $isActive={location.pathname.includes('carrinho')}
        >
          <img src={Cart} alt="Logo do carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="Logo da pessoa" />
        </PageLink>

        <ContainerText>
          <p>Olá, {userData.name}</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
