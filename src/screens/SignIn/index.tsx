import { Container, Slogan, Title } from './styles';
import BackgroundImg from '../../assets/background.png'
import { Button } from '../../components/Button';

export  function SignIn() {
  return (
    <Container source={BackgroundImg}>
      <Title>Iginitee Fleet</Title>

      <Slogan>Gestão de uso de veículos</Slogan>

      <Button title='Entrar com Google' />
    </Container>
  );
}


