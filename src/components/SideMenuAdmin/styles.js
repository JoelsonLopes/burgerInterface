import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
  width: 300px;
  top: 0;
  left: 0;

  hr {
    background: white;
    margin: 50px 15px;
  }
`

export const ItemContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: ${props => (props.$isActive ? '#565656' : 'none')};
  margin: 10px;
  padding-left: 20px;

  .icon {
    color: white;
  }
`

export const ListLink = styled(Link)`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  margin-left: 10px;
`
