import { Stack, styled, GetProps } from 'tamagui';

export const StyledView = styled(Stack, {
  name: 'StyledView'
})

export type StyledViewProps = GetProps<typeof StyledView>