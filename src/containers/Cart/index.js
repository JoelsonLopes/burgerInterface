import React from 'react'

import CartLogo from '../../assets/logo_cart.svg'
import { CartItens, CartResume } from '../../components'
import { CartImg, Container, Wrapper } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="Imagem logo do carrinho" />
      <Wrapper>
        <CartItens />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
