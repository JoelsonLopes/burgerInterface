import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0, 03);
  border-radius: 20px;
  padding: 10px;
  width: max-content;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;

  p {
    color: #9a9a9d;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  width: max-content;
  grid-gap: 10px 15px;

  img {
    width: 120px;
    border-radius: 10px;

    p {
      color: #000000;
      font-size: 17px;
    }
  }
`
export const EmptyCart = styled.div`
  padding: 20px;
  text-align: center;
  font-weight: bold;
`
