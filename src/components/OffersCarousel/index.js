import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Arrow from '../../assets/arrow.png'
import Offers from '../../assets/offers.png'
import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  ArrowLeft,
  CategoryImg,
  Image,
  Button,
  ArrowRight
} from './styles'

export function OffersCarousel() {
  const [sliderPerview, setSlidePerview] = useState(5)
  const [offers, setOffers] = useState([])
  const { putProductInCart } = useCart()
  const navigate = useNavigate()
  const swiperRef = useRef(null)

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

  const handleNextSlide = () => {
    swiperRef.current.swiper.slideNext()
  }

  const handlePrevSlide = () => {
    swiperRef.current.swiper.slidePrev()
  }

  return (
    <Container>
      <div>
        <CategoryImg src={Offers} alt="Logo ofertas" />
      </div>
      <ArrowLeft src={Arrow} onClick={handlePrevSlide} />
      {offers.length > 0 && (
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false
          }}
          grabCursor={true}
          spaceBetween={30}
          pagination={{ clickable: true }}
          slidesPerView={sliderPerview}
          style={{ width: '70%' }}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
          }}
        >
          {offers.map(product => (
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
      )}
      <ArrowRight src={Arrow} onClick={handleNextSlide} />
    </Container>
  )
}
