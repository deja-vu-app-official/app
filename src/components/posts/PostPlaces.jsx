import { View, Text } from 'react-native'
import { Children } from 'react'
import CardPlace from '@components/cards/CardPlace'

export default function ({ places, onPress }) {
  return (
    <>
      {Children.toArray(
        places.map((place, index) => (
          <View className="mb-2">
            <View className="py-4">
              <Text className="font-caviar text-lg text-gold">{`${index + 1}. ${
                place.title
              }`}</Text>
              <Text className="font-inter text-xs text-white">
                {place.address}
              </Text>
            </View>
            <CardPlace {...place} onPress={() => onPress(place)} />
          </View>
        ))
      )}
    </>
  )
}
