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
        tabBarIcon: () => <Text>Fav</Text>
      }} />
      <Tabs.Screen name="user/index" options={{
        href: null,
        title: 'User',
      }} />
      <Tabs.Screen name="schedule/index" options={{
        href: null,
        title: 'Schedule',
      }} />
    </Tabs>
  )
}

export default TabsLayout
