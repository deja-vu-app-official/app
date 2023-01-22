import { ScrollView } from 'react-native'

export default ({ children, width }) => {
  return (
    <ScrollView
      horizontal
      disableIntervalMomentum={true}
      snapToInterval={width}
      className="mx-2"
    >
      {children}
    </ScrollView>
  )
}
