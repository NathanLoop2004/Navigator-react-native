import { products } from '@/constants/productsStore';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';


const ProductDetailScreen = () => {

   const { id } = useLocalSearchParams<{ id: string }>();

   const product = products.find((p) => p.id === id);
    if (!product){
        return (
          <View className="px-5 mt-10">
            <Stack.Screen options={{ title: 'Producto no encontrado' }} />
            <View className="bg-white p-5 rounded-lg shadow">
              <Text className="text-2xl font-work-black">Producto no encontrado</Text>
              <Text className="my-5 font-work-light">
                No se encontro informacion para el producto seleccionado.
              </Text>
              <Pressable
                className="rounded-lg bg-primary p-4 active:opacity-75"
                onPress={() => router.back()}
              >
                <Text className="text-center font-work-black text-white">Volver</Text>
              </Pressable>
            </View>
          </View>
        );
    }

  return (
    <View className="px-5 mt-10">
      <Stack.Screen options={{ title: product.title }} />
      
      <View className="bg-white p-5 rounded-lg shadow">
         <Text className= "text-2xl font-work-black">{product.title}</Text>
         <Text className= "my-5 font-work-light">{product.description}</Text>
         <Text className= "text-xl font-work-black">{`$${product.price} USD`}</Text>
      </View>


    </View>
  )
}

export default ProductDetailScreen
