import { StyledText, StyledTextProps } from './Text.styled';

type TextProps = StyledTextProps & {};

export default function Text({ children, ...rest }: TextProps) {
  return (
    <StyledText {...rest}>
      {children}
    </StyledText>
  )
}