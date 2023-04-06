import Header from '../../components/header';
import { LoginContainer, LoginHeadline, LoginInputContainer, LoginSubtitle, LoginContent } from './styles';

function LoginPage() {
  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>
          <LoginSubtitle>ou entre com seu e-mail</LoginSubtitle>
          <LoginInputContainer>
          </LoginInputContainer>
          <LoginInputContainer>
          </LoginInputContainer>
        </LoginContent>
      </LoginContainer>
    </>
  );
}

export default LoginPage;
