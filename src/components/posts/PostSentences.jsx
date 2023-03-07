import { View, Text } from 'react-native'
import { Children } from 'react'

export default function ({ title, sentences }) {
  return (
    <View className="mb-2">
      <View className="py-4">
        <Text className="font-caviar text-lg text-gold">{title}</Text>
      </View>
      {Children.toArray(
        sentences.map((sentence, index) => {
          const background = index % 2 === 0 ? 'bg-gold' : 'bg-gold_light'

          return (
            <View className={` rounded-lg my-1 p-4 ${background}`}>
              <Text className="font-inter text-xs  text-background">
                {sentence}
              </Text>
            </View>
          )
        })
      )}
    </View>
  )
}
