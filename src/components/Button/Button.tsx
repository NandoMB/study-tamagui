import { StyledButton, StyledButtonProps } from './Button.styled';

type ButtonProps = StyledButtonProps & {
  // You can add more properties here...
};

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  );
}
