import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Offers from '../../assets/offers.png'
import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'

import { Container, CategoryImg, Image, Button } from './styles'

export function OffersCarousel() {
  const [sliderPerview, setSlidePerview] = useState(5)
  const [offers, setOffers] = useState([])
  const { putProductInCart } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products')

      const onlyOffers = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, formatedPrice: formatCurrency(product.price) }
        })

      setOffers(onlyOffers)
    }

    loadOffers()
  }, [])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePerview(1)
      } else if (window.innerWidth < 850) {
        setSlidePerview(2)
      } else if (window.innerWidth < 1200) {
        setSlidePerview(3)
      } else if (window.innerWidth < 1550) {
        setSlidePerview(4)
      } else {
        setSlidePerview(5)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Container>
      <CategoryImg src={Offers} alt="Logo ofertas" />
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        grabCursor={true}
        spaceBetween={30}
        pagination={{ clickable: true }}
        slidesPerView={sliderPerview}
        navigation
        style={{ width: '90%' }}
      >
        {offers &&
          offers.map(product => (
            <SwiperSlide key={product.id}>
              <Image src={product.url} alt="foto do produto" />
              <p>{product.name}</p>
              <p>{product.formatedPrice}</p>
              <Button
                onClick={() => {
                  putProductInCart(product)
                  navigate('/carrinho')
                }}
              >
                Peça agora
              </Button>
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  )
}
