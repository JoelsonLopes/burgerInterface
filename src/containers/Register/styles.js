import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`

export const RegisterImage = styled.img`
  flex: 70%;
  height: 100%;
  object-fit: cover;
`

export const ContainerItens = styled.div`
  flex: 30%;

  background: #373737;
  border-radius: 0 10px 10px 0;
  padding: 2% 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    color: #ffffff;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    margin-top: 10%;
  }
`

export const Label = styled.p`
  color: #ffffff;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: ${props => (props.$error ? '10px' : '20px')};
  margin-bottom: 1%;
`

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${props => (props.$error ? '2px solid #CC1717' : 'none')};
  padding-left: 10px;
`

export const SignInLink = styled.p`
  color: #ffffff;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
