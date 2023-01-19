import { View, Text } from 'react-native'
import { Colors } from '@utils/Theme'
import CardHighlight from '@components/cards/CardHighlight'

export default () => {
  const style = { backgroundColor: Colors.black, flex: 1, padding: 8 }

  return (
    <View style={style}>
      <CardHighlight
        title={'Enter Your Headline'}
        text={
          'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur '
        }
        price={15}
        id={5}
      />
    </View>
  )
}
