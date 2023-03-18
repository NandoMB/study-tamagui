import { StatusBar } from 'expo-status-bar';
import { useColorScheme, LogBox } from 'react-native';
import { TamaguiProvider, Theme, YStack, useTheme } from 'tamagui';
import * as Poppins from '@expo-google-fonts/poppins';
import useFontLoader from './src/hooks/useFontLoader';
import config from './tamagui.config';
import Docs from './src/screens/Docs';
import Button from './src/components/Button';


export default function App() {
  LogBox.ignoreLogs([
    `warning: matchMedia implementation is not provided.`
  ]);
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
    <TamaguiProvider config={config}>
      <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
        <YStack flex={1} backgroundColor="$background">
          <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
          <Button marginTop={60} onPress={() => {
            // console.log(JSON.stringify(theme, null, 2));
          }}>
            Change to {colorScheme === 'dark' ? 'light' : 'dark'}
          </Button>
          <Docs />
        </YStack>
      </Theme>
    </TamaguiProvider>
  );
}


