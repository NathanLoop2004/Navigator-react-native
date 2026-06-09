import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';



interface Props extends PressableProps {
  children: string;
  color?: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

const CustomButton = ({ children, color, onPress, onLongPress }: Props) => {

  const BtnColor = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary'
  }[color || 'primary' ]






  return (
<Pressable
className={`p-3 rounded-md ${BtnColor} active:opacity-75`} 
onPress={onPress}
onLongPress={onLongPress} >
  <Text className="text-white text-center">{children}</Text>
</Pressable>
  )
}

export default CustomButton