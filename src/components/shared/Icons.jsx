import {
  Feather,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import { Image } from 'react-native'

import BookIcon from '../../../assets/book_icon.png'
import CameraIcon from '../../../assets/camera_icon.png'
import ClapperboardIcon from '../../../assets/claquete_icon.png'

export const Book = (props) => {
  const image = Image.resolveAssetSource(BookIcon).uri

  return (
    <Image
      className="w-20"
      style={{ width: 30, height: 30 }}
      source={{ uri: image }}
    />
  )
}

export const Camera = (props) => {
  const image = Image.resolveAssetSource(CameraIcon).uri

  return (
    <Image
      className="w-20"
      style={{ width: 30, height: 30 }}
      source={{ uri: image }}
    />
  )
}

export const Clapperboard = (props) => {
  const image = Image.resolveAssetSource(ClapperboardIcon).uri

  return (
    <Image
      className="w-20"
      style={{ width: 30, height: 30 }}
      source={{ uri: image }}
    />
  )
}

export const Star = (props) => {
  return <FontAwesome name="star" size={24} color="black" {...props} />
}

export const Location = (props) => {
  return (
    <MaterialCommunityIcons
      name="map-marker-radius"
      size={24}
      color="black"
      {...props}
    />
  )
}

export const Search = (props) => {
  return <Feather name="search" size={24} color="black" {...props} />
}

export const HomeIcon = (props) => {
  return <FontAwesome5 name="home" size={24} color="black" {...props} />
}

export const MapIcon = (props) => {
  return <FontAwesome name="map" size={24} color="black" {...props} />
}

export const HeartIcon = (props) => {
  return <FontAwesome name="heart" size={24} color="black" {...props} />
}

export const DownloadIcon = (props) => {
  return <FontAwesome5 name="download" size={24} color="black" {...props} />
}

export const NavIcons = ({ type, selected }, ...args) => {
  const fill = selected ? '#2A2C30' : '#E8C589'

  if (type === 'Home') return <HomeIcon color={fill} {...args} />
  if (type === 'Map') return <MapIcon color={fill} {...args} />
  if (type === 'Wishlist') return <HeartIcon color={fill} {...args} />
  if (type === 'Downloads') return <DownloadIcon color={fill} {...args} />

  return null
}
