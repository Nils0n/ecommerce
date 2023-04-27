import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import { CustomInputContainer } from './styles';

interface ICustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const CustomInput: FunctionComponent<ICustomInputProps> = React.forwardRef(
  (props, ref) => {
    return <CustomInputContainer {...props} ref={ref as any} />;
  }
);

CustomInput.displayName = 'CustomInput';

export default CustomInput;
