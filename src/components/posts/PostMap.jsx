import { View, Text } from 'react-native'
import Map from '@components/shared/Map'

export default function ({ title, address, locations }) {
  return (
    <View className="mb-2">
      <View className="py-4">
        <Text className="font-caviar text-lg text-gold">{title}</Text>
        <Text className="font-inter text-xs text-white">{address}</Text>
      </View>
      <Map locations={locations} />
    </View>
  )
}
