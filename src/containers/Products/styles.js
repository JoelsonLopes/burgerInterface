import styled from 'styled-components'

export const Container = styled.div`
  background: #e5e5e5e5;
  min-height: 100vh;
`

export const ProductsImg = styled.img`
  width: 100%;
`
export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
`

export const CategoryButton = styled.button`
  cursor: pointer;
  color: ${props => (props.$isActiveCategory ? '#9758a6' : '#9a9a9d')};
  background: none;
  border: none;
  border-bottom: ${props => props.$isActiveCategory && 'solid 2px #9758a6'};
  font-style: normal;
  font-size: 17px;
  font-weight: 400px;
  line-height: normal;
  margin-right: 55px;
  padding-bottom: 5px;
`
export const ProductsContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  margin-left: 5%;
  margin-right: 10%;
  gap: 20px;
  padding: 40px;
  margin-top: 20px;
`
