import { View, ScrollView } from 'react-native'
export default ({ children, scroll = true }) => {
  if (!scroll) return <View className="flex-1 bg-background">{children}</View>
  return (
    <ScrollView className="bg-background">
      <View className="flex-1 mb-4 pt-12">{children}</View>
    </ScrollView>
  )
}
