import { FontAwesome } from '@expo/vector-icons'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'

export default ({ isSelected, onClick, size, color, style }) => {
  const [selected, setSelected] = useState(isSelected)
  const handleClick = () => {
    setSelected(!selected)
    onClick(!selected)
  }
  return (
    <TouchableOpacity style={style} onPress={() => handleClick()}>
      {selected ? (
        <FontAwesome name="heart" size={size} color={color} />
      ) : (
        <FontAwesome name="heart-o" size={size} color={color} />
      )}
    </TouchableOpacity>
  )
}
