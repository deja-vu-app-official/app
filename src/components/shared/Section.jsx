import { View, Text } from 'react-native'

export default ({ title, children }) => {
  return (
    <View className="mb-2">
      <Text className="p-4 font-caviar text-lg text-gold">{title}</Text>
      <View>{children}</View>
    </View>
  )
}
