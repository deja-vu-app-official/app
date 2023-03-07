import { TouchableOpacity, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Colors } from '@utils/Theme'

export default function ({ onPress, title }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center rounded-xl px-1 pr-2 py-0.5 bg-gold shadow"
    >
      <MaterialIcons
        name="keyboard-arrow-left"
        size={24}
        color={Colors.background}
      />
      <Text className="text-background">{title}</Text>
    </TouchableOpacity>
  )
}
