import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import Logo from '../../assets/logo_code_burger.svg'
import LoginImg from '../../assets/logo_login.svg'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  Button,
  SignInLink,
  ErrorMessage
} from './styles'

function Login() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um email valido')
      .required('O email é obrigatorio'),
    password: Yup.string('Digite sua senha para entrar')
      .required('A senha deve ter no minimo seis digitos')
      .min(6)
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => console.log(data)

  return (
    <Container>
      <LoginImage src={LoginImg} />
      <ContainerItens>
        <img src={Logo} />
        <h1>Entre</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>E-mail</Label>
          <Input
            type="email"
            {...register('email')}
            $error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            $error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit">Entrar</Button>
        </form>
        <SignInLink>
          Não possui conta? <a>Cadastra-se</a>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
export default Login
