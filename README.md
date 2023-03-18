
#### app.json
```json
"userInterfaceStyle": "automatic",
```

```bash
npx expo install expo-font expo-linear-gradient react-native-reanimated react-native-svg
```

```bash
yarn add @tamagui/core @tamagui/shorthands @tamagui/themes @tamagui/font-inter @tamagui/animations-react-native @tamagui/config @tamagui/babel-plugin babel-plugin-transform-inline-environment-variables react-native-web react-dom
```

update babel.config.js
```js
process.env.TAMAGUI_TARGET = 'native'; // Don't forget to specify your TAMAGUI_TARGET here

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['@tamagui/babel-plugin', {
        components: ['tamagui'],
        config: './tamagui.config.ts',
        logTimings: true
      }],
      ['transform-inline-environment-variables', {
        include: 'TAMAGUI_TARGET',
      }],
      'react-native-reanimated/plugin',
    ]
  };
};
```

touch tamagui.config.ts
```ts
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'
import { createFont, createTamagui } from 'tamagui'
export default createTamagui({
  themes,
  tokens,
  shorthands,
  fonts: {
    body: createFont({
      family: 'Arial',
      size: {
        // You'll want to fill these values in so you can use them
        // for now, fontSize="$4" will be 14px.
        // You can define different keys, but `tamagui`
        // standardizes on 1-15.
        4: 14,
      },
      lineHeight: {
        4: 16,
      },
    }),
  },
})

// OR

import { createInterFont } from '@tamagui/font-inter';
import { createMedia } from '@tamagui/react-native-media-driver';
import { shorthands } from '@tamagui/shorthands';
import { themes, tokens } from '@tamagui/theme-base';
import { createTamagui } from 'tamagui';
import { createAnimations } from '@tamagui/animations-react-native';
const animations = createAnimations({
  bouncy: {
    type: 'spring',
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: 'spring',
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  }
});
const headingFont = createInterFont();
const bodyFont = createInterFont();
const config = createTamagui({
  animations,
  defaultTheme: 'dark',
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  themes,
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  })
});
export type AppConfig = typeof config;
declare module 'tamagui' {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}
}
export default config;
```

Add Tamagui provider and theme support into App.tsx
```tsx
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { Paragraph, Spacer, TamaguiProvider, Theme, YStack } from "tamagui";
import { useFonts } from "expo-font";
import config from "./tamagui.config";
export default function App() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme === "dark" ? "dark" : "light"}>
        <YStack
          f={1}
          jc='center'
          ai="center"
          backgroundColor={"$backgroundSoft"}>
          <Paragraph color='$color' jc="center">
            {colorScheme}
          </Paragraph>
          <StatusBar style="auto" />
        </YStack>
      </Theme>
    </TamaguiProvider>
  );
}
```

run expo
```bash
npx expo start --clear
```




@tamagui/shorthands @tamagui/themes