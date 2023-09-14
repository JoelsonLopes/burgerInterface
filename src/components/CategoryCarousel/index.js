import React, { useEffect, useState } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Category from '../../assets/category.png'
import api from '../../services/api'
import { Container, CategoryImg, Image, Button } from './styles'

function CategoryCarousel() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategories()
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
        slidesPerView={4}
        style={{ width: '65%' }}
      >
        {categories &&
          categories.map(category => (
            <SwiperSlide key={category.id}>
              <Image src={category.url} alt="foto da categoria" />
              <Button>{category.name}</Button>
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  )
}

export default CategoryCarousel
