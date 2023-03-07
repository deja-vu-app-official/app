import { Text, View, Image } from 'react-native'
import Overlay from '@components/shared/Overlay'
import Badge from '@components/shared/Badge'

export default function ({ image, title, description, type }) {
  return (
    <View className="w-full">
      <View className="aspect-video rounded-xl overflow-hidden isolate relative">
        <Image
          className="absolute w-full h-full -z-10"
          source={{ uri: image }}
        />
        <Overlay color={'rgba(22,23,26,1)'} />
      </View>
      <View className="p-4 gap-2 flex-col items-center -translate-y-4 -mb-4">
        <Text className="font-caviar text-4xl text-gold text-center uppercase">
          {title}
        </Text>
        <Text className="font-inter text-white text-center">{description}</Text>
        <View className="">
          <Badge text={type} />
        </View>
      </View>
    </View>
  )
}
