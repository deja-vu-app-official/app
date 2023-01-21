import { View, Text, Image, StyleSheet } from 'react-native'
import { Colors, Fonts } from '@utils/Theme'
import Overlay from '@components/shared/Overlay'
import Button from '@components/shared/Button'
import Like from '@components/shared/Like'

export default ({ title, text, price, id }) => {
  return (
    <View className="w-full aspect-square rounded-xl overflow-hidden isolate">
      <Image
        // style={styles.image}
        className="absolute w-full h-full -z-10"
        source={{ uri: 'https://picsum.photos/700' }}
      />
      <View className="absolute w-full h-full">
        <Overlay />
      </View>
      <View className="flex-1 justify-end p-4 flex gap-2">
        <Text className="font-caviar text-2xl text-white">{title}</Text>
        <Text className="font-inter text-white">{text}</Text>
        <View className="pt-2 flex justify-between flex-row">
          <Text className="font-caviar text-3xl text-gold">{`${price}€`}</Text>
          <View className="flex flex-row gap-1 items-center ">
            <Button onPress={() => {}}>Acheter</Button>
            <Like
              size={30}
              isSelected={false}
              color={Colors.gold}
              onClick={(selected) => alert(selected)}
            />
          </View>
        </View>
      </View>
    </View>
  )
}
