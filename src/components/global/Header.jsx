import { View, Image, Text, TouchableOpacity } from 'react-native'
import exampleImage from '../../../assets/symbole-dejavu.png'
import { Search } from '@components/shared/Icons'
import { useNavigation } from '@react-navigation/native'

export default () => {
  const exampleImageUri = Image.resolveAssetSource(exampleImage).uri
  const navigator = useNavigation()

  const handleOnPress = (navigateTo) => {
    navigator.navigate(navigateTo)
  }

  return (
    <View
      style={{ backgroundColor: 'rgba(24, 24, 26, 0.9)' }}
      className="w-full px-4 pt-8 pb-2 absolute z-10 flex-row justify-between"
    >
      <TouchableOpacity onPress={() => handleOnPress('Home')}>
        <Image
          className="w-20"
          style={{ width: 46, height: 25 }}
          source={{ uri: exampleImageUri }}
        />
      </TouchableOpacity>
      <View className="flex-row gap-2">
        <TouchableOpacity onPress={() => alert('search')}>
          <Search />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('search')}>
          <Image
            className="aspect-square rounded-lg overflow-hidden h-[30]"
            source={{ uri: 'https://picsum.photos/700' }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
