import ReactSelect from 'react-select'

import styled from 'styled-components'

export const Container = styled.div`
  background: #efefef;
  min-height: 100vh;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ProductsImg = styled.img`
  width: 60px;
  border-radius: 5px;
`
export const ReactSelectStyle = styled(ReactSelect)`
  width: 250px;

  .css-13cymwt-control {
    cursor: pointer;
  }
`

export const Menu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 20px 0;
`

export const LinkMenu = styled.a`
  color: #323d5d;
  cursor: pointer;

  font-weight: ${props => (props.$isActiveStatus ? ' bold ' : 'normal')};
  border-bottom: ${props => props.$isActiveStatus && 'solid 2px #323d5d'};
  padding-bottom: 10px;
`
