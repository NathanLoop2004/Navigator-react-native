import { Redirect, Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { products } from '../../../constants/productsStore';


const ProductDetailScreen = () => {

   const { id } = useLocalSearchParams();
   const productId = Array.isArray(id) ? id[0] : id;

   const product = products.find((p) => p.id === productId);
    if (!product){
        return <Redirect href="/products" />;
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
