import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginImage = styled.img`
  height: 70%;
`

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 70%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    color: #ffffff;
    font-size: 24px;
    font-style: normal;
    font-weight: 500px;
    line-height: normal;
    text-align: center;
    margin-top: 100px;
  }
`

export const Label = styled.p`
  color: #ffffff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500px;
  line-height: normal;
  margin-top: 28px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 392px;
  height: 39px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${props => (props.$error ? '2px solid #CC1717' : 'none')};
  padding-left: 10px;
`

export const Button = styled.button`
  width: 183px;
  height: 37px;
  background: #9758a6;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 500px;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #eeeeee;
  margin-top: 75px;
  margin-bottom: 25px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`

export const SignInLink = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-style: normal;
  font-weight: 300px;
  line-height: normal;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const ErrorMessage = styled.p`
  color: #cc1717;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400px;
  line-height: normal;
  margin-top: 4px;
`
