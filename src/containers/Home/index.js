import React from 'react'

import HomeLogo from '../../assets/logo_home.svg'
import { CategoryCarousel, OffersCarousel } from '../../components'

import { Container, HomeImg } from './styles'

export function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="Imagem logo da Home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
