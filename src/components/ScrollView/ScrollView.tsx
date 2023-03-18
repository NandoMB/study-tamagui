import { StyledScrollView, StyledScrollViewProps } from './ScrollView.styled';

type ScrollViewProps = StyledScrollViewProps & {};

export default function ScrollView({ children, ...rest }: ScrollViewProps) {
  return (
    <StyledScrollView {...rest}>
      {children}
    </StyledScrollView>
  )
}