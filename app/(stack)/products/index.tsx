import { FlatList, Text, View } from 'react-native';
import { products } from '../../../constants/productsStore';

export default function ProductScreen() {
  
  return (
    <View>
      <FlatList 
      data= {products}
      renderItem={({item})=> <Text>{item.title}</Text> }
      keyExtractor={(item)=>item.id}/>
    </View>
  )
}