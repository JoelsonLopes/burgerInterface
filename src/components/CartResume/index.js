import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import api from './../../services/api'
import { Container } from './styles'

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState()
  const [deliverytax] = useState(5)

  const { cartProducts } = useCart()

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(sumAllItems)
  }, [cartProducts, deliverytax])

  const submitOrder = async () => {
    const order = cartProducts.map(product => {
      return { id: product.id, quantity: product.quantity }
    })

    await toast.promise(api.post('orders', { products: order }), {
      pending: 'Processando seu pedido',
      success: 'Pedido realizado com sucesso',
      error: 'Falha ao tentar realizar seu pedido, tente novamente'
    })
  }

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="itens">Itens</p>
          <p className="itens-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliverytax)}</p>
        </div>
        <div className="container-botton">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliverytax)}</p>
        </div>
      </Container>
      <Button style={{ width: '100%', marginTop: 30 }} onClick={submitOrder}>
        Finzalizar pedido
      </Button>
    </div>
  )
}
