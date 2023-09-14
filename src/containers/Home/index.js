import React from 'react'

import HomeLogo from '../../assets/logo_home.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import OffersCarousel from '../../components/OffersCarousel'
import { Container, HomeImg } from './styles'

function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="Imagem logo da Home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}

export default Home
