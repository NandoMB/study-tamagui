import { Stack, styled, GetProps } from '@tamagui/core';

export const StyledView = styled(Stack, {
  name: 'StyledView'
})

export type StyledViewProps = GetProps<typeof StyledView>