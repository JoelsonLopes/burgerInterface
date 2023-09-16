import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
  padding: 16px;
  gap: 12px;
  display: flex;
  width: max-content;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Image = styled.img`
  width: 150px;
  height: 140px;
  border-radius: 10px;
`

export const ProductName = styled.p`
  color: #000000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const ProductPrice = styled.p`
  color: #000000;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  margin-top: 30px;
`
