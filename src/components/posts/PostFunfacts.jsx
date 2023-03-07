import { View, Text } from 'react-native'
import { Children } from 'react'

export default function ({ title, funfacts }) {
  return (
    <View className="mb-2">
      <View className="py-4">
        <Text className="font-caviar text-lg text-gold">{title}</Text>
      </View>
      {Children.toArray(
        funfacts.map((fact, index) => {
          return (
            <View className={` rounded-lg my-1 p-4 bg-backgroundLight`}>
              <Text className="font-inter text-xs  text-gold">{fact}</Text>
            </View>
          )
        })
      )}
    </View>
  )
}
