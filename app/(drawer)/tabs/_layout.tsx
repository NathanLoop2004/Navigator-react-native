import { Tabs } from 'expo-router'
import { Text } from 'react-native'

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="(stack)" options={{
        title: 'Home',
        tabBarIcon: () => <Text>Home</Text>
      }} />
      <Tabs.Screen name="favorites/index" options={{
        title: 'Favorites',
        headerShown: true,
        tabBarIcon: () => <Text>Fav</Text>
      }} />

    </Tabs>
  )
}

export default TabsLayout
