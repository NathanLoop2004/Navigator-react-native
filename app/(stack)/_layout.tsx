import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'home/index',
};

const StackLayout = () => {
  return (
    <Stack

      screenOptions = {{
        headerShadowVisible: false,
        gestureEnabled: true,
        animation: 'slide_from_right',
        fullScreenGestureEnabled: true,
      }}
    >
      <Stack.Screen name="home/index"     options={{ title: "Inicio" }} />
      <Stack.Screen name="products/index" options={{ title: "Productos" }} />
      <Stack.Screen name="profile/index"  options={{ title: "Perfil" }} />
      <Stack.Screen name="settings/index" options={{ title: "Configuracion" }} />
      <Stack.Screen name="products/[id]" options={{ title: "Producto" }} />

    </Stack>
  );
};

export default StackLayout;
