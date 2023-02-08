import { Book, Camera, Clapperboard } from '@components/shared/Icons'
import { View, Text, TouchableOpacity } from 'react-native'

const Icon = ({ icon }) => {
  if (icon == 'book') return <Book height="30" />
  if (icon == 'camera') return <Camera height="30" />
  if (icon == 'clapperboard') return <Clapperboard height="30" />
  return <Book />
}

export default ({ title, icon }) => {
  let _icon = null
  if (icon == 'book') _icon = <Book />
  if (icon == 'camera') _icon = <Camera />
  if (icon == 'clapperboard') _icon = <Clapperboard />

  return (
    <TouchableOpacity className="w-[30%]">
      <View className="p-4 bg-backgroundLight rounded-lg flex items-center">
        <Icon icon={icon} />
        <Text className="font-caviar text-gold mt-1">{title}</Text>
      </View>
    </TouchableOpacity>
  )
}
