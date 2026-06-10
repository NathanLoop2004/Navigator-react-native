import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const SettingsScreen = () => {
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Link href="/tabs/home">Go to Home</Link>
    </View>
  )
}

export default SettingsScreen
