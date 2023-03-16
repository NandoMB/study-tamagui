import { plainTheme as lightPlain, tamaguiTheme as lightTamagui } from './light';
import { plainTheme as darkPlain, tamaguiTheme as darkTamagui } from './dark';

export const plainThemes = {
  light: lightPlain,
  dark: darkPlain
};

export const tamaguiThemes = {
  light: lightTamagui,
  dark: darkTamagui
};

// Theme example
// const light = {
//   background: '#fff',
//   backgroundHover: tokens.color.gray2,
//   backgroundPress: tokens.color.gray4,
//   backgroundFocus: tokens.color.gray5,
//   backgroundTransparent: tokens.color.grayA1,
//   borderColor: tokens.color.gray4,
//   borderColorHover: tokens.color.gray6,
//   borderColorPress: tokens.color.gray12,
//   borderColorFocus: tokens.color.gray11,
//   color: tokens.color.gray10,
//   colorHover: tokens.color.gray9,
//   colorPress: tokens.color.gray8,
//   colorFocus: tokens.color.gray8,
//   shadowColor: tokens.color.grayA4,
//   shadowColorHover: tokens.color.grayA6,
//   shadowColorPress: tokens.color.grayA8,
//   shadowColorFocus: tokens.color.grayA8,
//   ...lightColors,
// }
