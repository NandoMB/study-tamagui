import { StatusBar } from 'expo-status-bar';
import { View, useColorScheme } from 'react-native';
// import { Paragraph, Spacer, Text, TamaguiProvider, Theme, YStack } from 'tamagui';
import { TamaguiProvider, Theme } from '@tamagui/core';
import * as Poppins from '@expo-google-fonts/poppins';
import useFontLoader from './src/hooks/useFontLoader';
import config from './tamagui.config';
import Docs from './src/screens/Docs';


export default function App() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFontLoader([
    { font: Poppins, ignore: ['__metadata__', 'useFonts'] }
  ]);

  if (error) {
    console.log(`[ERROR - useFontLoader] ${error}`);
  }

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config} defaultTheme="dark">
      <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
        <View style={{ flex: 1 }}>
          <StatusBar style={colorScheme === 'dark' ? 'dark' : 'light'} />
          <Docs />
        </View>
      </Theme>
    </TamaguiProvider>
  );
}


