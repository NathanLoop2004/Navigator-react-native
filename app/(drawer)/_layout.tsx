import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { router } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import React from 'react'

const DrawerLayout = () => {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        swipeEnabled: true,
      }}
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <DrawerItem label="Home" onPress={() => router.push('/tabs/home')} />
          <DrawerItem label="User" onPress={() => router.push('/user')} />
          <DrawerItem label="Schedule" onPress={() => router.push('/schedule')} />
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen name="tabs" options={{ title: 'Home' }} />
    </Drawer>
  )
}

export default DrawerLayout
