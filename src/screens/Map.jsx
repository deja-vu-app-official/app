import React, { useEffect, useState } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { StyleSheet, View, Text } from 'react-native'
import { Location } from '@components/shared/Icons'
import CardPostSmall from '../components/cards/CardPostSmall'

const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#263c3f',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#6b9a76',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#38414e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#212a37',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9ca5b3',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#1f2835',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#f3d19c',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#2f3948',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#515c6d',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
]

export default () => {
  const [data, setData] = useState(null)
  const [current, setCurrent] = useState(null)

  useEffect(() => {
    if (!data) {
      setData(getData())
    }
  }, [data])

  if (!data)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  return (
    <View className="flex-1">
      <MapView
        style={styles.map}
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
      >
        {React.Children.toArray(
          data.map((marker) => (
            <Marker
              coordinate={marker.coordinate}
              onPress={() => setCurrent(marker)}
              centerOffset={{ x: 0, y: -25 }}
            >
              <View>
                <Location
                  width={50}
                  height={50}
                  selected={current === marker}
                />
              </View>
            </Marker>
          ))
        )}
      </MapView>
      {current && (
        <View className="absolute w-full bottom-0 p-2">
          <CardPostSmall {...current} onPress={() => alert('hello')} />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
})

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
