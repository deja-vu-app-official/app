import { useState, Children, useCallback } from 'react'
import Layout from '@components/shared/Layout'
import Loading from '@components/shared/Loading'
import { POST_TYPE_SCREEN } from '@utils/Theme'
import { usePage } from '../../hooks/usePage'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { View, Text } from 'react-native'
import { Location } from '@components/shared/Icons'
import CardPostSmall from '../components/cards/CardPostSmall'
import { MAP_STYLE } from '@utils/Theme'

export default () => {
  const [current, setCurrent] = useState(null)

  const { data, loading, error, navigation } = usePage({
    page: 'map',
  })

  const handlePostPress = useCallback((post) => {
    navigation.navigate(POST_TYPE_SCREEN[post.type], { ...post })
  }, [])

  if (loading) return <Loading />

  return (
    <Layout scroll={false}>
      <MapView
        className="w-full h-full"
        customMapStyle={MAP_STYLE}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 45.899247,
          longitude: 6.129384,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}
      >
        {Children.toArray(
          data.items.map((marker) => (
            <Marker
              coordinate={marker.coordinate}
              onPress={() => setCurrent(marker)}
              centerOffset={{ x: 0, y: -25 }}
            >
              <View>
                <Location
                  size={50}
                  className={`${
                    current === marker ? 'text-gold' : 'text-gold_light'
                  }`}
                />
              </View>
            </Marker>
          ))
        )}
      </MapView>
      {current && (
        <View className="absolute w-full bottom-2 p-2">
          <CardPostSmall
            {...current}
            onPress={() => handlePostPress(current)}
          />
        </View>
      )}
    </Layout>
  )
}

function getData() {
  return [
    {
      type: 'Lieux',
      price: 0.98,
      rating: 5,
      title: 'Lucy',
      description: 'Scène course poursuite',
      image: 'https://picsum.photos/700',
      id: 2,
      coordinate: { latitude: 45.899247, longitude: 6.129384 },
    },
    {
      type: 'Circuit',
      price: 0.98,
      rating: 3,
      title: 'Harry Potter',
      description: 'Scène course poursuite',
      image: 'https://picsum.photos/700',
      id: 2,
      coordinate: { latitude: 46.89925, longitude: 6.129394 },
    },
  ]
}
