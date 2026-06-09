import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
  <SafeAreaView>
    <View className="px-10 mt-5">
      <Text>HomeScreen</Text>

    <CustomButton 
    className="mb-5" 
    color="primary" 
    onPress={() => router.push('/products')}>
       Productos 
    </CustomButton>

    <CustomButton 
    className="mb-5" 
    color="secondary" 
    onPress={()=> router.push('/profile')}>
       Profile
    </CustomButton>
    
    <CustomButton 
    className="mb-5" 
    color="tertiary" 
    onPress={()=> router.push('/settings')}>
       Settings 
    </CustomButton>

    </View>

  </SafeAreaView>  
  )
}

export default HomeScreen