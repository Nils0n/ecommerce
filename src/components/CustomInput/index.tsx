import { InputHTMLAttributes } from 'react';
import { CustomInputContainer } from './styles';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

function CustomInput({ hasError, ...rest }: CustomInputProps) {
  return (
    <CustomInputContainer {...rest} hasError={hasError} />
  );
}

export default CustomInput;
