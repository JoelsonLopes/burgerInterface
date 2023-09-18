import React, { useEffect, useState } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Category from '../../assets/category.png'
import api from '../../services/api'

import { Container, CategoryImg, Image, Button } from './styles'

export function CategoryCarousel() {
  const [sliderPerview, setSlidePerview] = useState(5)

  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategories()
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
      <CategoryImg src={Category} alt="Categorias" />

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        grabCursor={true}
        spaceBetween={30}
        pagination={{ clickable: true }}
        slidesPerView={sliderPerview}
        navigation
        style={{ width: '90%' }}
      >
        {categories &&
          categories.map(category => (
            <SwiperSlide key={category.id}>
              <Image src={category.url} alt="foto da categoria" />
              <Button to={'/produtos'} state={{ categoryId: category.id }}>
                {category.name}
              </Button>
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  )
}
