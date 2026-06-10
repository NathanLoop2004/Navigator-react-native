import CustomButton from '@/components/CustomButton'
import { DrawerActions } from '@react-navigation/native'
import { router, useNavigation } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const HomeScreen = () => {

   const navigation = useNavigation();

   const openDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer())


   }





  return (
  <SafeAreaView>
    <View className="px-10 mt-5 ">
      <Text className="mb-10 bg-white p-10 rounded-lg shadow">
        <Text className="text-[30px] font-work-black">HomeScreen</Text>
      </Text>
      

    <CustomButton 
    className="mb-[15px]" 
    color="primary" 
    onPress={() => router.push('/tabs/products')}>
       Productos 
    </CustomButton>

    <CustomButton 
    className="mb-[15px]" 
    color="secondary" 
    onPress={()=> router.push('/tabs/profile')}>
       Profile
    </CustomButton>
    
    <CustomButton 
    className="mb-[15px]" 
    color="tertiary" 
    onPress={()=> router.push('/tabs/settings')}>
       Settings 
    </CustomButton>
    
  <CustomButton onPress={openDrawer}>
    Abrir Menu
  </CustomButton>
   


    </View>

  </SafeAreaView>  
  )
}

export default HomeScreen
