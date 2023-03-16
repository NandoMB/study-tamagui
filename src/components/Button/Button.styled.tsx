import { Text, Stack, styled, GetProps } from '@tamagui/core';

export const StyledButton = styled(Stack, {
  name: 'StyledButton',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 100_000_000,
  overflow: 'hidden',
  // variants: {
  //   size: {
  //     md: {
  //        fontSize: '$sm',
  //        $gtMd: {
  //           fontSize: '$md',
  //        },
  //       $gt2xl: {
  //           fontSize: '$lg',
  //        }
  //     }
  //   }
  // }
  variants: {
    size: {
      '...size': (size, { tokens }) => {
        return {
          width: tokens.size[size] ?? size,
          height: tokens.size[size] ?? size,
        }
      },
    },
  },
})

export type StyledButtonProps = GetProps<typeof StyledButton>