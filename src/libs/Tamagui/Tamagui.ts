import { createTamagui, TamaguiConfig, TamaguiInternalConfig } from 'tamagui';

import fonts from './configs/fonts';
import media from './configs/media';
import animations from './configs/animations';
import shorthands from './configs/shorthands';
import themes from './configs/themes';
import tokens from './configs/tokens';

const config = createTamagui({
  defaultTheme: 'dark',
  // shouldAddPrefersColorThemes: false,
  // themeClassNameOnRoot: false,
  // mediaQueryDefaultActive: 'sm',
  // disableRootThemeClass: true
  reactNative: true,
  animations,
  fonts,
  media,
  shorthands,
  themes,
  tokens,
}) as TamaguiInternalConfig;

export type AppConfig = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;