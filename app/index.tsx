import { Redirect } from "expo-router";

export default function Index() {
  return (
    <Redirect href="/tabs/home" />
/*     <View className= "flex-1 items-center justify-center bg-black">
      <Text className = " text-4xl font-work-black  text-white"  >Hola mundo</Text>
      <Text className = " text-3xl font-work-medium text-white"  >Hola mundo</Text>
      <Text className = " text-2xl font-work-light  text-white"  >Hola mundo</Text>
      <Text className = " text-xl  font-work-light  text-white"  >Hola mundo</Text>

      <Link href="/products" className= "text-white">Go to Products</Link>
    </View> */
  );
}
