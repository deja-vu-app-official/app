import { TouchableOpacity, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Colors } from '@utils/Theme'

export default function ({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} className="flex-row items-center ">
      <MaterialIcons name="keyboard-arrow-left" size={24} color={Colors.gold} />
      <Text className="text-gold">{title}</Text>
    </TouchableOpacity>
  )
}
