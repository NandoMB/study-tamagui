import { createTheme } from 'tamagui';
import { addAlphaToHexColor } from '../helpers';
import tokens from '../tokens';


export default createTheme({
  // Default
  colorDefault: tokens.color.white,
  borderColorDefault: tokens.color.darkGray_200,
  borderColorHoverDefault: tokens.color.darkGray_300,
  borderColorPressDefault: tokens.color.darkGray_300,
  borderColorFocusDefault: tokens.color.darkGray_300,
  backgroundColorDefault: tokens.color.darkGray_200,
  backgroundColorTransparentDefault: addAlphaToHexColor(tokens.color.darkGray_200, 20),
  backgroundColorOnPressDefault: tokens.color.darkGray_300,
  backgroundColorOnFocusDefault: tokens.color.darkGray_300,
  backgroundColorOnHoverDefault: tokens.color.darkGray_300,
  // Primary
  colorPrimary: tokens.color.white,
  borderColorPrimary: tokens.color.primary_400,
  borderColorHoverPrimary: tokens.color.primary_700,
  borderColorPressPrimary: tokens.color.primary_700,
  borderColorFocusPrimary: tokens.color.primary_700,
  backgroundColorPrimary: tokens.color.primary_400,
  backgroundColorTransparentPrimary: addAlphaToHexColor(tokens.color.primary_400, 20),
  backgroundColorOnPressPrimary: tokens.color.primary_700,
  backgroundColorOnFocusPrimary: tokens.color.primary_700,
  backgroundColorOnHoverPrimary: tokens.color.primary_700,
  // Secondary
  colorSecondary: tokens.color.white,
  borderColorSecondary: tokens.color.secondary_400,
  borderColorHoverSecondary: tokens.color.secondary_600,
  borderColorPressSecondary: tokens.color.secondary_600,
  borderColorFocusSecondary: tokens.color.secondary_600,
  backgroundColorSecondary: tokens.color.secondary_400,
  backgroundColorTransparentSecondary: addAlphaToHexColor(tokens.color.secondary_400, 20),
  backgroundColorOnPressSecondary: tokens.color.secondary_600,
  backgroundColorOnFocusSecondary: tokens.color.secondary_600,
  backgroundColorOnHoverSecondary: tokens.color.secondary_600,
  // Tertiary
  colorTertiary: tokens.color.white,
  borderColorTertiary: tokens.color.tertiary_600,
  borderColorHoverTertiary: tokens.color.tertiary_900,
  borderColorPressTertiary: tokens.color.tertiary_900,
  borderColorFocusTertiary: tokens.color.tertiary_900,
  backgroundColorTertiary: tokens.color.tertiary_600,
  backgroundColorTransparentTertiary: addAlphaToHexColor(tokens.color.tertiary_600, 20),
  backgroundColorOnPressTertiary: tokens.color.tertiary_900,
  backgroundColorOnFocusTertiary: tokens.color.tertiary_900,
  backgroundColorOnHoverTertiary: tokens.color.tertiary_900,
});
