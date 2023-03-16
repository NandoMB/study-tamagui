import { Text, styled, GetProps } from '@tamagui/core';

export const StyledText = styled(Text, {
  name: 'StyledText',
  fontFamily: '$poppins',
  fontStyle: 'italic'
})

export type StyledTextProps = GetProps<typeof StyledText>