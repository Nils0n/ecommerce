import { BsGoogle } from 'react-icons/bs';
import { FiLogIn } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import Header from '../../components/Header';

import { LoginContainer, LoginHeadline, LoginInputContainer, LoginSubtitle, LoginContent } from './styles';

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data: any) {
    console.log(data);
  }
  console.log(errors);

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
            <CustomInput
              {...register('email', { required: true })}
              placeholder='Digite seu e-mail'
              hasError={!!errors?.email}
            />
          </LoginInputContainer>

          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput
              placeholder='Digite sua senha'
              {...register('password', { required: true })}
              hasError={!!errors?.password}
            />
          </LoginInputContainer>

          <CustomButton
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(onSubmit)()}
          >
            Entrar
          </CustomButton>

        </LoginContent>
      </LoginContainer>
    </>
  );
}

export default LoginPage;
