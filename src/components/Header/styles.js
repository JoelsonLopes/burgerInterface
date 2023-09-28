import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 68px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(1px);
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.$isActive ? '#9758ae' : '#555555')};
  border-bottom: ${props => props.$isActive && 'solid 2px #9758a6'};
  font-size: 16px;
  line-height: 19px;
  font-weight: ${props => (props.$isActive ? 'bold' : 'normal')};
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
export const Line = styled.div`
  height: 40px;
  border: 0.5px solid rgba(186, 186, 186, 1);
`

export const ContainerText = styled.div`
  p {
    color: #555555;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`

export const PageLinkExit = styled.a`
  cursor: pointer;
  color: #9758a6;
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  line-height: 16px;
  display: flex;
  align-items: center;
  margin-top: 5px;
`
