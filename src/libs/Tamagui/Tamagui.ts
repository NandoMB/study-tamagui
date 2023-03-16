// import * as ReactNative from 'react-native';
import {
  // setupReactNative,
  createTamagui
} from '@tamagui/core';

import fonts from './configs/fonts';
import { plainTokens as mediaPlain, tamaguiTokens as mediaTamagui } from './configs/media';
import { plainTokens as animationsPlain, tamaguiTokens as animationsTamagui } from './configs/animations';
import { plainTokens as shorthandsPlain, tamaguiTokens as shorthandsTamagui } from './configs/shorthands';
import { plainThemes as themesPlain, tamaguiThemes as themesTamagui } from './configs/themes';
import { plainTokens as tokensPlain, tamaguiTokens as tokensTamagui } from './configs/tokens';

// if using only @tamagui/core with `react-native` components
// if using `tamagui` this isn't necessary
// setupReactNative(ReactNative);

const config = createTamagui({
  defaultTheme: 'dark',
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  reactNative: true,
  fonts,
  media: mediaPlain,
  animations: animationsTamagui,
  shorthands: shorthandsPlain,
  themes: themesPlain,
  tokens: tokensPlain,
  // Experimental / advanced, only for overriding the core component styles
  // Prefer to use styled() for building your own, only useful for edge cases.
  // defaultProps: {
  //   Text: {
  //     // override any default props here
  //   }
  // },
});

export type AppConfig = typeof config;

declare module '@tamagui/core' {
	// overrides TamaguiCustomConfig so your custom types
	// work everywhere you import `tamagui`
	interface TamaguiCustomConfig extends AppConfig {}

  // Strict add this:
  // interface ThemeValueFallback {
  //   value: never
  // }
}

export default config;