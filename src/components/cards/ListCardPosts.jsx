import { FlatList, View } from 'react-native'
import CardPostSmall from './CardPostSmall'

export default ({ posts, onPress }) => {
  return (
    <>
      {posts.map((post, index) => (
        <View className="py-2" key={index}>
          <CardPostSmall {...post} onPress={() => onPress(post)} />
        </View>
      ))}
    </>
  )
}
