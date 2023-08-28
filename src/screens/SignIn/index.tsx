import { Container, Title, Slogan } from './styles';
import backGroundImg from '../../assets/background.png'
import { Button } from '../../components/Button';

export function SignIn() {
  return (
    <Container source={backGroundImg}>
      <Title>Ignite Fleet</Title>
      <Slogan>Gestão de uso de veículos</Slogan>

      <Button title='Entrar com Google' />
    </Container>
  );
}
