import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FiLogIn } from 'react-icons/fi';

import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import Header from '../../components/Header';
import InputErrorMessage from '../../components/InputErrorMessage';

import { SignUpContainer, SignUpHeadline, SignUpContent, SignUpInputContainer } from './styles';


const schema = yup.object().shape({
  name: yup
    .string()
    .min(4, 'Campo deve possuir no mínimo 4 caracteres')
    .required('Campo obrigatório'),
  lastName: yup
    .string()
    .min(4, 'Campo deve possuir no mínimo 4 caracteres')
    .required('Campo obrigatório'),
  email: yup
    .string()
    .email('Campo deve ser do tipo e-mail')
    .required('Campo obrigatório'),
  password: yup
    .string()
    .min(8, 'Campo deve possuir no mínimo 8 caracteres')
    .required('Campo obrigatório'),
  confirmationPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Senhas não conferem')
    .required('Campo obrigatório')
});

interface SignUpForm {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmationPassword: string;
}

function SignUpPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpForm>({
    mode: 'onChange',
    resolver: yupResolver(schema)
  });

  function onSubmit(data: SignUpForm) {
    console.log(data);
  }

  return (
    <>
      <Header />

      <SignUpContainer>
        <SignUpContent>

          <SignUpHeadline>Crie sua conta</SignUpHeadline>

          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput
              {...register('name')}
              placeholder='Digite seu nome'
              hasError={!!errors?.name}
            />

            {errors?.name && <InputErrorMessage>{String(errors.name?.message)}</InputErrorMessage>}

          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Sobrenome</p>
            <CustomInput
              {...register('lastName')}
              placeholder='Digite seu sobrenome'
              hasError={!!errors?.lastName}
            />

            {errors?.lastName && <InputErrorMessage>{String(errors.lastName?.message)}</InputErrorMessage>}

          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>E-mail</p>
            <CustomInput
              {...register('email')}
              placeholder='Digite seu e-mail'
              hasError={!!errors?.email}
            />

            {errors?.email && <InputErrorMessage>{String(errors.email?.message)}</InputErrorMessage>}

          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Senha</p>
            <CustomInput
              {...register('password')}
              placeholder='Digite sua senha'
              type="password"
              hasError={!!errors?.password}
            />

            {errors?.password && <InputErrorMessage>{String(errors.password?.message)}</InputErrorMessage>}

          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Confirmação de senha</p>
            <CustomInput
              {...register('confirmationPassword')}
              placeholder='Digite novamente sua senha'
              type="password"
              hasError={!!errors?.confirmationPassword}
            />

            {errors?.confirmationPassword && <InputErrorMessage>{String(errors.confirmationPassword?.message)}</InputErrorMessage>}

          </SignUpInputContainer>

          <CustomButton
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(onSubmit)()}
          >
            Criar conta
          </CustomButton>

        </SignUpContent>
      </SignUpContainer>
    </>
  );
}

export default SignUpPage;
