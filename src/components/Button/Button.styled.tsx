import { Button, styled, GetProps } from 'tamagui';
import { capitalize } from '../../libs/Tamagui/configs/helpers';


export const StyledButton = styled(Button, {
  name: 'Button',
  tag: 'Button',
  unstyled: true,
  height: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '400',
  borderWidth: 2,
  borderRadius: 12,
  variants: {
    theme: {
      default: {
        color: '$colorDefault',
        borderColor: '$borderColorDefault',
        backgroundColor: '$backgroundColorDefault',
        pressStyle: {
          borderColor: '$borderColorPressDefault',
          backgroundColor: '$backgroundColorOnPressDefault',
        },
        focusStyle: {
          borderColor: '$borderColorFocusDefault',
          backgroundColor: '$backgroundColorOnFocusDefault',
        },
        hoverStyle: {
          borderColor: '$borderColorHoverDefault',
          backgroundColor: '$backgroundColorOnHoverDefault',
        }
      },
      primary: {
        color: '$colorPrimary',
        borderColor: '$borderColorPrimary',
        backgroundColor: '$backgroundColorPrimary',
        pressStyle: {
          borderColor: '$borderColorPressPrimary',
          backgroundColor: '$backgroundColorOnPressPrimary',
        },
        focusStyle: {
          borderColor: '$borderColorFocusPrimary',
          backgroundColor: '$backgroundColorOnFocusPrimary',
        },
        hoverStyle: {
          borderColor: '$borderColorHoverPrimary',
          backgroundColor: '$backgroundColorOnHoverPrimary',
        }
      },
      secondary: {
        color: '$colorSecondary',
        borderColor: '$borderColorSecondary',
        backgroundColor: '$backgroundColorSecondary',
        pressStyle: {
          borderColor: '$borderColorPressSecondary',
          backgroundColor: '$backgroundColorOnPressSecondary',
        },
        focusStyle: {
          borderColor: '$borderColorFocusSecondary',
          backgroundColor: '$backgroundColorOnFocusSecondary',
        },
        hoverStyle: {
          borderColor: '$borderColorHoverSecondary',
          backgroundColor: '$backgroundColorOnHoverSecondary',
        }
      },
      tertiary: {
        color: '$colorTertiary',
        borderColor: '$borderColorTertiary',
        backgroundColor: '$backgroundColorTertiary',
        pressStyle: {
          borderColor: '$borderColorPressTertiary',
          backgroundColor: '$backgroundColorOnPressTertiary',
        },
        focusStyle: {
          borderColor: '$borderColorFocusTertiary',
          backgroundColor: '$backgroundColorOnFocusTertiary',
        },
        hoverStyle: {
          borderColor: '$borderColorHoverTertiary',
          backgroundColor: '$backgroundColorOnHoverTertiary',
        }
      }
    },
    variant: {
      solid: {},
      outline: (_, { theme, tokens, props }) => {
        const colorVariant = capitalize(props.theme ?? 'default');
        return {
          color: `$backgroundColor${colorVariant}`,
          backgroundColor: 'transparent',
          pressStyle: { backgroundColor: `$backgroundColorTransparent${colorVariant}` },
          focusStyle: { backgroundColor: `$backgroundColorTransparent${colorVariant}` },
          hoverStyle: { backgroundColor: `$backgroundColorTransparent${colorVariant}` }
        };
      },
      link: (_, { theme, tokens, props }) => {
        const colorVariant = capitalize(props.theme ?? 'default');
        return {
          color: `$backgroundColor${colorVariant}`,
          borderColor: 'transparent',
          backgroundColor: 'transparent',
          pressStyle: { backgroundColor: `$backgroundColorTransparent${colorVariant}` },
          focusStyle: { backgroundColor: `$backgroundColorTransparent${colorVariant}` },
          hoverStyle: { backgroundColor: `$backgroundColorTransparent${colorVariant}` }
        };
      }
    },
    size: {
      xs: { fontSize: 10, paddingHorizontal: 12, paddingVertical: 0 },
      sm: { fontSize: 12, paddingHorizontal: 16, paddingVertical: 2 },
      md: { fontSize: 14, paddingHorizontal: 22, paddingVertical: 6 },
      lg: { fontSize: 16, paddingHorizontal: 26, paddingVertical: 8 },
      xl: { fontSize: 18, paddingHorizontal: 32, paddingVertical: 12 },
    },
    disabled: {
      true: { opacity: 0.4 }
    }
  } as const,
  defaultVariants: {
    theme: 'default',
    variant: 'solid',
    size: 'xl'
  }
});

export type StyledButtonProps = GetProps<typeof StyledButton>
