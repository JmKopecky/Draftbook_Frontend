import { Stack } from 'expo-router';
import {View, Text, StatusBar} from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error] = useFonts({
    'Space Mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
    'Roboto Mono': require('../assets/fonts/RobotoMono-VariableFont.ttf')
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


  return (<>
    <StatusBar
        backgroundColor="#080810"
        barStyle="dark-content"
    />
    <Stack initialRouteName="index" screenOptions={{
      headerShown: false
    }}/>

    </>);
}
