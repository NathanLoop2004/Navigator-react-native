import { router } from 'expo-router';
import { FlatList, Pressable, Text, View } from 'react-native';
import { products } from '../../../constants/productsStore';

export default function ProductScreen() {
   
   

  return (
    <View>
      <FlatList 
      data= {products}
       keyExtractor={(item)=>item.id}
      renderItem={({item})=> 
      <Pressable
        className="mt-10 active:opacity-75"
        onPress={() =>
          router.push({
            pathname: "/products/[id]",
            params: { id: item.id },
          })
        }
      >
        
        <View className="bg-white p-5 rounded-lg shadow">
                  <Text className='text-2xl font-work-black'>{item.title}</Text>
        <Text className= "">{item.description}</Text>

        <View className="flex flex-row justify-between" >
          <Text className='font-work-black'>{item.price}</Text>
          <Text className="text-primary">View Details</Text>
        </View>
        </View>
        



      </Pressable> }
      
      />
    </View>
  )
}
