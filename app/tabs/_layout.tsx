import { Tabs } from 'expo-router'
import { Text } from 'react-native'

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home/index" options={{ 
        title: 'Home',
        tabBarIcon: () => <Text>🏠</Text>
      }} />
      <Tabs.Screen name="favorites/index" options={{ 
        title: 'Favorites',
        tabBarIcon: () => <Text>⭐</Text>
      }} />
    </Tabs>
  )
}

export default TabsLayout
