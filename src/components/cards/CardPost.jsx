import { View, Text, Image, TouchableOpacity } from 'react-native'
import Badge from '@components/shared/Badge'
import Rating from '@components/shared/Rating'

export default ({
  type,
  title,
  description,
  image,
  price,
  rating,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="w-[150] px-2 flex">
        <Image
          // style={styles.image}
          className="aspect-picture rounded-xl overflow-hidden"
          source={{ uri: image }}
        />

        <View className="mt-4 flex gap-1">
          <View className="py-2 flex justify-between flex-row">
            <Badge text={type} />
            <Text className="font-caviar text-gold">{`${price}€`}</Text>
          </View>
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
