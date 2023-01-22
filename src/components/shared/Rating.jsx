import { Star } from '@components/shared/Icons'
import { View } from 'react-native'

export default ({ value }) => {
  const rating = Array(value).fill('')
  const norating = 5 - value > 0 ? Array(5 - value).fill('') : []

  return (
    <View className="flex flex-row py-1">
      {rating.map((star, index) => (
        <Star key={index} className="w-5 h-5 text-gold" />
      ))}
      {norating.map((star, index) => (
        <Star key={index} className="w-5 h-5 text-backgroundLight" />
      ))}
    </View>
  )
}
