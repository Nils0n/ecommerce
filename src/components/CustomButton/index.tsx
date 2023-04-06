import { ReactNode, ButtonHTMLAttributes } from 'react';
import { CustomButtonContainer, IconContainer } from './styles';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  startIcon?: ReactNode;
}

function CustomButton({ children, startIcon, ...rest }: CustomButtonProps) {
  return (
    <CustomButtonContainer {...rest}>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}
      {children}
    </CustomButtonContainer>
  );
}

export default CustomButton;
