import React from 'react'

import Logo from '../../assets/logo_code_burger.svg'
import LoginImg from '../../assets/logo_login.svg'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  Button,
  SignInLink
} from './styles'

function Login() {
  return (
    <Container>
      <LoginImage src={LoginImg} />
      <ContainerItens>
        <img src={Logo} />
        <h1>Entre</h1>

        <Label>E-mail</Label>
        <Input />

        <Label>Senha</Label>
        <Input />

        <Button>Entrar</Button>
        <SignInLink>
          Não possui conta? <a>Cadastra-se</a>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
export default Login
