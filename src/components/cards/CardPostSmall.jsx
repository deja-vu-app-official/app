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
    <TouchableOpacity
      onPress={onPress}
      className="bg-backgroundLight rounded-2xl p-4"
    >
      <View className="flex flex-row gap-2">
        <Image
          // style={styles.image}
          className="aspect-square rounded-xl overflow-hidden "
          source={{ uri: image }}
        />

        <View className="flex gap-1 flex-1">
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
