import React from 'react'

import CartLogo from '../../assets/logo_cart.svg'
import { CartItens } from '../../components'

import { CartImg, Container } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="Imagem logo do carrinho" />
      <CartItens />
    </Container>
  )
}
