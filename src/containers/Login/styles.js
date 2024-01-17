import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column; /* Altere a direção da coluna para telas menores */
  }
`

export const LoginImage = styled.div`
  flex: 70%;
  height: 100%;
  background-image: url('sua-imagem.jpg'); /* Substitua 'sua-imagem.jpg' pela imagem que você deseja usar como background */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    flex: none; /* Remova a flexibilidade da imagem em telas menores */
    height: 50vh; /* Ajuste a altura conforme necessário */
  }
`

export const ContainerItens = styled.div`
  flex: 30%;
  background: #373737;
  border-radius: 0 10px 10px 0;
  padding: 2% 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative; /* Adicione uma posição relativa para que possa posicionar na frente da imagem */

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

  @media (max-width: 768px) {
    flex: none; /* Remova a flexibilidade em telas menores */
    width: 100%; /* Defina a largura como 100% em telas menores */
    height: 50vh; /* Ajuste a altura conforme necessário */
    border-radius: 0; /* Remova o arredondamento em telas menores */
    margin-top: 20px; /* Ajuste a margem superior conforme necessário */
    z-index: 1; /* Coloque na frente da imagem de fundo */
  }
`

export const Label = styled.p`
  color: #ffffff;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 2%;
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
