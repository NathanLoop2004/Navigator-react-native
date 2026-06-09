import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const ProfileScreen = () => {
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Link href="/home">Go to Home</Link>
    </View>
  )
}

export default ProfileScreen