import { StyledButton, StyledButtonProps } from './Button.styled';
import Text from '../Text';

type ButtonProps = StyledButtonProps & {};

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <StyledButton>
      <Text>{children}</Text>
    </StyledButton>
  )
}