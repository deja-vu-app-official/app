import { Star } from '@components/shared/Icons'
import { View } from 'react-native'

export default ({ value }) => {
  const rating = Array(value).fill('')
  const norating = 5 - value > 0 ? Array(5 - value).fill('') : []
  const size = 15

  return (
    <View className="flex flex-row py-1">
      {rating.map((star, index) => (
        <Star key={index} className="text-gold mr-1" size={size} />
      ))}
      {norating.map((star, index) => (
        <Star key={index} className="text-backgroundLight mr-1" size={size} />
      ))}
    </View>
  )
}
