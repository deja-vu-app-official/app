import { View, Text, Image, TouchableOpacity } from 'react-native'

export default ({ title, image, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="flex">
        <View className="mb-2 rounded-xl overflow-hidden">
          <Image
            // style={styles.image}
            className="aspect-portrait "
            source={{ uri: image }}
          />
          <View className="absolute bg-backgroundLight opacity-40 w-full h-full"></View>
        </View>

        <View className="absolute w-full h-full flex justify-center items-center p-6">
          <Text className="font-caviar text-md text-gold text-center uppercase">
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
