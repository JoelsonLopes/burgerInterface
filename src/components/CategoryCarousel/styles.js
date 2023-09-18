import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 0;
  gap: 35px;
`

export const Swiper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CategoryImg = styled.img``

export const SwiperSlide = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .swiper-button-next {
    margin-right: 15px;
  }
  .swiper-button-prev {
    margin-left: 5px;
  }
`

export const Image = styled.img`
  border-radius: 10px;
  width: 200px;
  height: 200px;
`

export const Button = styled(Link)`
  padding: 10px;
  margin-top: 16px;
  background: #9758a6;
  border-radius: 10px;
  width: 200px;
  height: 50px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-style: normal;
  line-height: 100%;
  text-decoration: none;

  color: #ffffff;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.6;
  }
`
