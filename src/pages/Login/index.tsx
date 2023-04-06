import { BsGoogle } from 'react-icons/bs';
import CustomButton from '../../components/CustomButton';
import Header from '../../components/header';
import { LoginContainer, LoginHeadline, LoginInputContainer, LoginSubtitle, LoginContent } from './styles';

function LoginPage() {
  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>
          <CustomButton
            startIcon={<BsGoogle size={18} />}
          >
            Entra com o Google
          </CustomButton>
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
