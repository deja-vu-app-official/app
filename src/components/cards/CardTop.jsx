import { View, Text, Image, TouchableOpacity } from 'react-native'
import Rating from '@components/shared/Rating'

export default ({ title, image, rating, onPress, index, description }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="px-2 flex">
        <Text className="font-interBold text-gold absolute top-2 left-4 z-30 text-6xl ">
          {index + 1}
        </Text>
        <View className="mb-2 rounded-xl overflow-hidden">
          <Image
            // style={styles.image}
            className="aspect-portrait "
            source={{ uri: image }}
          />
          <View className="absolute bg-backgroundLight opacity-40 w-full h-full"></View>
        </View>

        <View className="mt-4 flex gap-1">
          <Text className="font-caviar text-white">{title}</Text>
          {description && (
            <Text className="font-inter text-white text-xs">{description}</Text>
          )}
          <Rating value={rating} />
        </View>
      </View>
    </TouchableOpacity>
  )
}
