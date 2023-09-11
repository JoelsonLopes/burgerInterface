import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import Logo from '../../assets/logo_code_burger.svg'
import RegisterImg from '../../assets/logo_register.svg'
import Button from '../../conponents/Button'
import apiCodeBurger from '../../services/api'
import {
  Container,
  RegisterImage,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  ErrorMessage
} from './styles'

function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required('O seu nome é obrigatório.'),
    email: Yup.string()
      .email('Digite um email válido')
      .required('O email é obrigatório'),
    password: Yup.string('Digite sua senha para entrar')
      .required('A senha deve ter no mínimo seis dígitos')
      .min(6),
    confirmPassword: Yup.string('Digite sua senha para entrar')
      .required('A senha deve ter no mínimo seis dígitos')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  // Mantendo apiStatus para uso futuro
  const [apiStatus, setApiStatus] = useState(null)
  const onSubmit = async clientData => {
    try {
      const response = await apiCodeBurger.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      const { status } = response

      if (status === 201 || status === 200) {
        toast.success('Cadastro criado com sucesso')
        // Você pode redirecionar ou executar outras ações após um sucesso aqui.
      } else if (status === 409) {
        toast.error(
          'E-mail já cadastrado! Entre com o seu e-mail e senha para continuar'
        )
      } else {
        throw new Error()
      }

      setApiStatus(status)
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente')
    }
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} />
      <ContainerItens>
        <img src={Logo} alt="Logo" />
        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label $error={errors.name?.message}>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            $error={errors.name?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label $error={errors.email?.message}>E-mail</Label>
          <Input
            type="email"
            {...register('email')}
            $error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label $error={errors.password?.message}>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            $error={errors.password?.message}
          />
          <ErrorMessage $error={errors.confirmPasswordpassword?.message}>
            {errors.password?.message}
          </ErrorMessage>

          <Label $error={errors.confirmPassword?.message}>
            Confirmar senha
          </Label>
          <Input
            type="password"
            {...register('confirmPassword')}
            $error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 25, marginBottom: 25 }}>
            Inscrever-se
          </Button>
        </form>
        <SignInLink>
          Já possui conta? <a>Entre aqui</a>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
export default Register
