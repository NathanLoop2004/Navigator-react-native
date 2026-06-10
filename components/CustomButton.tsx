import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';



interface Props extends PressableProps {
  children: string;
  className?: string;
  color?: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

const CustomButton = ({ children, className, color, onPress, onLongPress }: Props) => {

  const BtnColor = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary'
  }[color || 'primary' ]






  return (
<Pressable
className={`p-6 rounded-md ${BtnColor} active:opacity-75 ${className ?? ''}`} 
onPress={onPress}
onLongPress={onLongPress} >
  <Text className="text-white text-center font-work-black">{children}</Text>
</Pressable>
  )
}

export default CustomButton
