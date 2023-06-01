import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { BsGoogle } from 'react-icons/bs';
import { FiLogIn } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import Header from '../../components/Header';
import Loading from '../../components/Loading';

import { LoginContainer, LoginHeadline, LoginInputContainer, LoginSubtitle, LoginContent } from './styles';
import InputErrorMessage from '../../components/InputErrorMessage';
import { AuthError, AuthErrorCodes, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, db, googleProvider } from '../../config/firebase.config';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { UserContext } from '../../contexts/UserContext';

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

interface ILoginForm {
  email: string;
  password: string;
}


function LoginPage() {
  const { isAuthenticated } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, setError, formState: { errors } } = useForm<ILoginForm>({
    mode: 'onChange',
    resolver: yupResolver(schema)
  });

  async function onSubmit(data: ILoginForm) {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, data.email, data.password);

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
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true);
      const userCredentials = await signInWithPopup(auth, googleProvider);

      const querySnapShot = await getDocs(query(collection(db, 'users'), where('id', '==', userCredentials.user.uid)));

      const user = querySnapShot.docs[0]?.data();

      if (!user) {
        const firstName = userCredentials.user.displayName?.split(' ')[0];
        const lastName = userCredentials.user.displayName?.split(' ')[1];

        await addDoc(collection(db, 'users'), {
          id: userCredentials.user.uid,
          email: userCredentials.user.email,
          firstName,
          lastName,
          provider: 'google'
        });
      }

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);

  return (
    <>
      <Header />
      {isLoading && <Loading />}
      <LoginContainer>
        <LoginContent>

          <LoginHeadline>Entre com a sua conta</LoginHeadline>

          <CustomButton
            startIcon={<BsGoogle size={18} />}
            onClick={handleSignInWithGoogle}
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
