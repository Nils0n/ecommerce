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


function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  });

  function onSubmit(data: any) {
    console.log(data);
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
