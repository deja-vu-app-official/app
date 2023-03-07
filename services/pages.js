import homeData from '../mocks/home.json'
import placeData from '../mocks/place.json'
import circuitData from '../mocks/circuit.json'
import mapData from '../mocks/map.json'
export function getPageData({ page, params }) {
  switch (page) {
    case 'home':
      return new Promise.resolve(homeData)
    case 'place':
      return new Promise.resolve(placeData)
    case 'circuit':
      return new Promise.resolve(circuitData)
    case 'map':
      return new Promise.resolve(mapData)

    default:
      return new null()
  }
}
