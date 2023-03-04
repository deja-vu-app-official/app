import React, { Component } from 'react'
import { API_TOKEN } from '@env'

class Map extends Component {
  componentDidMount() {
    let PlacesRequest =
      'https://deja-vu-api.herokuapp.com/api/places?populate=*'
    fetch(PlacesRequest, {
      method: 'get',
      headers: new Headers({
        Authorization: `Bearer ${API_TOKEN}`,
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        let markers = []
        for (const el of responseData.data) {
          console.log(el.attributes)
          let marker = {
            id: uuidV1(), // The ID attached to the marker. It will be returned when onMarkerClicked is called
            position: { lat: [LATITTUDE], lng: [LONGITUDE] }, // Latitude and Longitude of the marker
            icon: '🍇', // HTML element that will be displayed as the marker.  It can also be text or an SVG string.
            size: [32, 32],
            animation: {
              duration: getDuration(),
              delay: getDelay(),
              iterationCount,
              type: AnimationType.BOUNCE,
            },
          }
          markers.push(marker)
        }
        this.setState({
          markersData: markers,
        })
      })
      .catch((error) => console.log(error)) //to catch the errors if any
  }
  render() {
    return (
      // <LeafletView

      // />
      <View></View>
    )
  }
}

export default Map
