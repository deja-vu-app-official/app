import { View, Text, Image } from 'react-native'

export default ({ title }) => {
  return (
    <View className="w-full aspect-portrait rounded-xl overflow-hidden isolate ">
      <View className="absolute bg-gold opacity-40 w-full h-full"></View>
      <View className="flex-1 justify-center p-4 ">
        <Text className="font-caviar text-md text-gold text-center uppercase">
          {title}
        </Text>
      </View>
    </View>
  )
}
