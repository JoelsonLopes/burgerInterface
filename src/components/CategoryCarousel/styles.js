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

export const ArrowLeft = styled.img`
  position: absolute;
  left: 55px;
  top: 65%;
  transform: translateY(-50%) rotate(180deg);
  width: 50px;
  cursor: pointer;
`

export const ArrowRight = styled.img`
  position: absolute;
  right: 55px;
  top: 65%;
  transform: translateY(-50%);
  width: 50px;
  cursor: pointer;
`
