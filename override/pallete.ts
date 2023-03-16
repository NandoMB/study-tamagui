/**
 * Pallete Generators
 * 
 * https://coolors.co/
 * https://json-color-palette-generator.vercel.app/
 * https://smart-swatch.netlify.app/
 * https://palx.jxnblk.com/
 */

const pallete = {
  basic: {
    white: '#FFFFFF',
    black: '#000000'
  },
  primary: {
    primary_50: '#82aaff',
    primary_100: '#6193ff',
    primary_200: '#417dff',
    primary_300: '#2067ff',
    primary_400: '#004fff',
    primary_500: '#064de6',
    primary_600: '#0b48ce',
    primary_700: '#0f44b7',
    primary_800: '#113fa1',
    primary_900: '#13398b'
  },
  secondary: {
    secondary_50: '#ffdc82',
    secondary_100: '#ffd261',
    secondary_200: '#ffc941',
    secondary_300: '#ffc020',
    secondary_400: '#ffb800',
    secondary_500: '#e6a606',
    secondary_600: '#ce970b',
    secondary_700: '#b7870f',
    secondary_800: '#a17811',
    secondary_900: '#8b6913'
  },
  tertiary: {
    tertiary_50: '#e3ffec',
    tertiary_100: '#c5fdd6',
    tertiary_200: '#a8f9c1',
    tertiary_300: '#8cf4ad',
    tertiary_400: '#70f299',
    tertiary_500: '#61ec8d',
    tertiary_600: '#55e582',
    tertiary_700: '#49dd78',
    tertiary_800: '#3fd46e',
    tertiary_900: '#36ca65'
  },
  info: {
    info_50: '#f0f9ff',
    info_100: '#e0f2fe',
    info_200: '#bae6fd',
    info_300: '#7dd3fc',
    info_400: '#38bdf8',
    info_500: '#0ea5e9',
    info_600: '#0284c7',
    info_700: '#0369a1',
    info_800: '#075985',
    info_900: '#0c4a6e'
  },
  success: {
    success_50: '#f0fdf4',
    success_100: '#dcfce7',
    success_200: '#bbf7d0',
    success_300: '#86efac',
    success_400: '#4ade80',
    success_500: '#22c55e',
    success_600: '#16a34a',
    success_700: '#15803d',
    success_800: '#166534',
    success_900: '#14532d'
  },
  warning: {
    warning_50: '#fff7ed',
    warning_100: '#ffedd5',
    warning_200: '#fed7aa',
    warning_300: '#fdba74',
    warning_400: '#fb923c',
    warning_500: '#f97316',
    warning_600: '#ea580c',
    warning_700: '#c2410c',
    warning_800: '#9a3412',
    warning_900: '#7c2d12'
  },
  danger: {
    danger_50: '#fff1f2',
    danger_100: '#ffe4e6',
    danger_200: '#fecdd3',
    danger_300: '#fda4af',
    danger_400: '#fb7185',
    danger_500: '#f43f5e',
    danger_600: '#e11d48',
    danger_700: '#be123c',
    danger_800: '#9f1239',
    danger_900: '#881337'
  },
  text: {
    text_50: '#fafafa',
    text_100: '#f5f5f5',
    text_200: '#e5e5e5',
    text_300: '#d4d4d4',
    text_400: '#a3a3a3',
    text_500: '#737373',
    text_600: '#525252',
    text_700: '#404040',
    text_800: '#262626',
    text_900: '#171717'
  },
  light_gray: {
    light_gray_50: '#e9ecef',
    light_gray_100: '#cbd1d6',
    light_gray_200: '#bcc3ca',
    light_gray_300: '#adb5bd',
    light_gray_400: '#a5adb5',
    light_gray_500: '#9da5ac',
    light_gray_600: '#8f969c',
    light_gray_700: '#898f95',
    light_gray_800: '#82888e',
    light_gray_900: '#767c81',
  },
  dark_gray: {
    dark_gray_50: '#54575a',
    dark_gray_100: '#434649',
    dark_gray_200: '#3a3d40',
    dark_gray_300: '#303337',
    dark_gray_400: '#292c30',
    dark_gray_500: '#25292d',
    dark_gray_600: '#212529',
    dark_gray_700: '#1f2327',
    dark_gray_800: '#1d2124',
    dark_gray_900: '#191c1f'
  }
};

export default {
  // UI Tokens
  textPrimary: pallete.basic.white,
  textSecondary: pallete.basic.black,
  background: pallete.dark_gray.dark_gray_900,
  primary: pallete.primary.primary_400,
  secondary: pallete.secondary.secondary_400,
  tertiary: pallete.tertiary.tertiary_400,
  // Colors
  ...pallete.basic,
  ...pallete.primary,
  ...pallete.secondary,
  ...pallete.tertiary,
  ...pallete.info,
  ...pallete.success,
  ...pallete.warning,
  ...pallete.danger,
  ...pallete.text,
  ...pallete.light_gray,
  ...pallete.dark_gray
};