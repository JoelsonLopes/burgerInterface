import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  padding: 15px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-top {
    display: grid;
    grid-gap: 10px 55px;
    grid-template-areas:
      'title title'
      'itens itens-price '
      'delivery-tax delivery-tax-price ';

    .title {
      grid-area: title;
      margin-bottom: 20px;
    }

    .itens {
      grid-area: itens;
    }

    .itens-price {
      grid-area: itens-price;
    }

    .delivery-tax {
      grid-area: delivery-tax;
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
    }
  }

  .container-botton {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
    color: #000000;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
    margin-top: 30px;
  }
`