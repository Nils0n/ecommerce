import { InputErrorMessageContainer } from './styles';

interface InputErrorMessageProps {
  children: string;
}

function InputErrorMessage({ children }: InputErrorMessageProps) {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>;
}

export default InputErrorMessage;
