import { BsGoogle } from 'react-icons/bs';
import { FiLogIn } from 'react-icons/fi';

import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import Header from '../../components/Header';

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
            <p>E-mail</p>
            <CustomInput placeholder='Digite seu e-mail' />
          </LoginInputContainer>
          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput placeholder='Digite sua senha' />
          </LoginInputContainer>
          <CustomButton startIcon={<FiLogIn size={18} />}>Entrar</CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  );
}

export default LoginPage;
