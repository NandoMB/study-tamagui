import { ScrollView, styled, GetProps } from 'tamagui';

export const StyledScrollView = styled(ScrollView, {
  name: 'StyledScrollView'
})

export type StyledScrollViewProps = GetProps<typeof StyledScrollView>