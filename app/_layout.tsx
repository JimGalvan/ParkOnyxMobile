import {useFonts} from 'expo-font';
import {Navigator} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import 'react-native-reanimated';

import {useColorScheme} from '@/hooks/useColorScheme';
import {SessionProvider} from '@/auth/auth-context';
import {NativeBaseProvider} from "native-base";
import Slot = Navigator.Slot;

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <NativeBaseProvider>
      <SessionProvider>
        <Slot/>
      </SessionProvider>
      </NativeBaseProvider>
  );
}
