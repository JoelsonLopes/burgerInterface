import styled from 'styled-components'

export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 0;
  gap: 35px;

  .swiper-slide img {
  }
`

export const Swiper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CategoryImg = styled.img``

export const SwiperSlide = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  border-radius: 10px;
  width: 200px;
  height: 200px;
`

export const Button = styled.button`
  padding: 10px;
  margin-top: 16px;
  background: #9758a6;
  border-radius: 10px;
  width: 200px;
  height: 50px;
  border: none;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  line-height: 100%;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.6;
  }
`
