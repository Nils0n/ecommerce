import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { BsGoogle } from 'react-icons/bs';
import { FiLogIn } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import Header from '../../components/Header';

import { LoginContainer, LoginHeadline, LoginInputContainer, LoginSubtitle, LoginContent } from './styles';
import InputErrorMessage from '../../components/InputErrorMessage';
import { AuthError, AuthErrorCodes, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Campo deve ser do tipo e-mail')
    .required('Campo obrigatório'),
  password: yup
    .string()
    .min(8, 'Campo deve possuir no mínimo 8 caracteres')
    .required('Campo obrigatório')
});

interface LoginForm {
  email: string;
  password: string;
}

function LoginPage() {
  const { register, handleSubmit, setError, formState: { errors } } = useForm<LoginForm>({
    mode: 'onChange',
    resolver: yupResolver(schema)
  });

  async function onSubmit(data: LoginForm) {
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log(userCredentials);

    } catch (error) {
      console.log(error);
      const _error = error as AuthError;

      switch (_error.code) {
        case AuthErrorCodes.USER_DELETED:
          setError('email', { message: 'E-mail não cadastrado' });
          break;

        case AuthErrorCodes.INVALID_PASSWORD:
          setError('password', { message: 'Senha inválida' });
          break;
      }
    }
  }

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
              {...register('email')}
              placeholder='Digite seu e-mail'
              hasError={!!errors?.email}
            />

            {errors?.email && <InputErrorMessage>{String(errors.email?.message)}</InputErrorMessage>}

          </LoginInputContainer>

          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput
              placeholder='Digite sua senha'
              {...register('password')}
              hasError={!!errors?.password}
              type="password"
            />

            {errors?.password && <InputErrorMessage>{String(errors.password?.message)}</InputErrorMessage>}

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
