import { Text, View } from 'react-native'

export default ({ text }) => {
  return (
    <View
      className=" rounded-xl border-gold flex px-2.5 py-0.5 w-fit"
      style={{ borderWidth: 1 }}
    >
      <Text className="text-gold text-xs font-inter text-center">{text}</Text>
    </View>
  )
}
