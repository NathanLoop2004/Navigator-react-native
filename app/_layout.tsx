import { useFonts } from 'expo-font';
import { Slot } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { View } from "react-native";
import "./global.css";


export default function RootLayout() {

  useFonts({
    "WorkSans-Black": require('../font/WorkSans-Black.ttf'),
    "WorkSans-Light": require('../font/WorkSans-Light.ttf'),
    "WorkSans-Medium": require('../font/WorkSans-Medium.ttf')
  })
  
  return (
    <View className="flex-1">
      <Slot />
      <StatusBar style="light" />
    </View>
  );
}
