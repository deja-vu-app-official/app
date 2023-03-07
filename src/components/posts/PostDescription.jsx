import { View, Text } from 'react-native'

export default function ({ title, moment, description }) {
  return (
    <View className="mb-2">
      <View className="py-4">
        <Text className="font-caviar text-lg text-gold">{title}</Text>
        <Text className="font-inter text-xs text-white">{moment}</Text>
      </View>
      <Text className="font-inter text-white">{description}</Text>
    </View>
  )
}
