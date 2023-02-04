import { useEffect, useState } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { NavIcons } from '@components/shared/Icons'
import { useNavigation } from '@react-navigation/native'

const navigationList = [
  {
    label: 'Accueil',
    navigateTo: 'Home',
  },
  {
    label: 'Carte',
    navigateTo: 'Map',
  },
  {
    label: 'Favoris',
    navigateTo: 'Wishlist',
  },
  {
    label: 'Downloads',
    navigateTo: 'Downloads',
  },
]
export default () => {
  const [current, setCurrent] = useState('Home')
  const navigation = useNavigation()

  const handleOnPress = (navigateTo) => {
    setCurrent(navigateTo)
    navigation.navigate(navigateTo)
  }

  useEffect(() => {
    console.log(current)
  })

  return (
    <View className="flex-row py-1 px-4 gap-2 justify-between bg-background">
      {navigationList.map((link, key) => {
        const selected = link.navigateTo === current
        return (
          <TouchableOpacity
            className={`py-2 rounded-lg w-[70] flex items-center ${
              selected ? 'bg-gold' : ''
            } `}
            key={key}
            onPress={() => handleOnPress(link.navigateTo)}
          >
            {
              <NavIcons
                type={link.navigateTo}
                selected={selected ? true : false}
              />
            }
            <Text className={`text-xs ${selected ? '' : 'text-gold'}`}>
              {link.label}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
