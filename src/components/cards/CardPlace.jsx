import { View, Text, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Button from '../shared/Button'

export default function ({ image, description, id, onPress }) {
  return (
    <View className="rounded-xl overflow-hidden ">
      <Image className="aspect-video" source={{ uri: image }} />
      <View className="bg-backgroundLight p-4 flex items-center ">
        <Text className="text-white">{description}</Text>
        <View className="p-4">
          <TouchableOpacity
            className="rounded-xl px-4 py-3 bg-gold flex-row justify-center"
            onPress={() => onPress()}
          >
            <AntDesign name="infocirlce" size={14} color="black" />
            <Text className="font-caviar ml-2">
              {'Plus d’informations sur le lieu'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
