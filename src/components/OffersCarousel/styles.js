import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;
`

export const Swiper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CategoryImg = styled.img``

export const SwiperSlide = styled.div`
  display: flex;
  flex-direction: column;

  p {
    width: 155px;
    font-size: 15px;
    font-style: normal;
    font-weight: 700px;
    line-height: 120%;
    width: 200px;
    margin-left: 12px;
  }
`

export const Image = styled.img`
  border-radius: 10px;
  width: 200px;
  height: 200px;
  margin-bottom: 16px;

  object-fit: cover;
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

export const ArrowLeft = styled.img`
  position: absolute;
  left: 150px;
  margin-top: 185px;
  transform: rotate(180deg);
  width: 50px;
  cursor: pointer;
`

export const ArrowRight = styled.img`
  position: absolute;
  right: 185px;
  margin-top: 185px;
  width: 50px;
  cursor: pointer;
`
