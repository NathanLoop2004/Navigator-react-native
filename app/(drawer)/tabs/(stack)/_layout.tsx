import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { Stack, useNavigation } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';

export const unstable_settings = {
  initialRouteName: 'home/index',
};

const StackLayout = () => {
  const navigation = useNavigation();

  const drawerButton = ({ tintColor }: { tintColor?: string }) => (
    <Pressable
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      style={styles.headerButton}
    >
      <Ionicons name="menu" size={24} color={tintColor ?? '#111827'} />
    </Pressable>
  );

  return (
    <Stack

      screenOptions ={{
        headerShadowVisible: false,
        gestureEnabled: true,
        animation: 'slide_from_right',
        fullScreenGestureEnabled: true,
      }}
    >
      <Stack.Screen name="home/index"     options={{ title: "Home", headerLeft: drawerButton }} />
      <Stack.Screen name="products/index" options={{ title: "Productos", headerLeft: drawerButton }} />
      <Stack.Screen name="profile/index"  options={{ title: "Perfil", headerLeft: drawerButton }} />
      <Stack.Screen name="settings/index" options={{ title: "Configuracion", headerLeft: drawerButton }} />
      <Stack.Screen name="products/[id]" options={{ title: "Producto", headerLeft: drawerButton }} />

    </Stack>
  );
};

const styles = StyleSheet.create({
  headerButton: {
    alignItems: 'center',
    height: 44,
    justifyContent: 'center',
    marginLeft: 10,
    width: 44,
  },
});

export default StackLayout;
