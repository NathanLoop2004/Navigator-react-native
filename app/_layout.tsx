import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View } from "react-native";
import '../lib/ignoreDeprecatedPointerEventsWarning';
import "./global.css";


export default function RootLayout() {

  const [fontsLoaded, error] = useFonts({
    "WorkSans-Black": require('../font/WorkSans-Black.ttf'),
    "WorkSans-Light": require('../font/WorkSans-Light.ttf'),
    "WorkSans-Medium": require('../font/WorkSans-Medium.ttf')
  })
  
  useEffect(()=> {
    if (error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }



  return (
    <View className="flex-1">
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(stack)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="light" />
    </View>
  );
}
