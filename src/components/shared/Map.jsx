import { View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { Location } from '@components/shared/Icons'
import { Children } from 'react'
import { MAP_STYLE } from '@utils/Theme'
export default function ({ locations = [] }) {
  let initialPosition = {
    latitude: locations.length ? locations[0].latitude : 45.899247,
    longitude: locations.length ? locations[0].longitude : 6.129384,
    latitudeDelta: 10,
    longitudeDelta: 10,
  }

  console.log(locations)
  return (
    <View className="rounded-2xl overflow-hidden">
      <MapView
        className="w-full h-[250]"
        customMapStyle={MAP_STYLE}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialPosition}
      >
        {Children.toArray(
          locations.map((marker) => (
            <Marker
              coordinate={marker}
              // onPress={() => setCurrent(marker)}
              centerOffset={{ x: 0, y: -25 }}
            >
              <View>
                <Location size={50} className={`text-gold`} />
              </View>
            </Marker>
          ))
        )}
      </MapView>
    </View>
  )
}
