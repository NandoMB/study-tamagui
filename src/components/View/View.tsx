import { StyledView, StyledViewProps } from './View.styled';

type ViewProps = StyledViewProps & {};

export default function View({ children, ...rest }: ViewProps) {
  return (
    <StyledView {...rest}>
      {children}
    </StyledView>
  )
}