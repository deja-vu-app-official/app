import { View, Text, Image, StyleSheet } from 'react-native'
import { Colors, Fonts } from '@utils/Theme'
import Overlay from '@components/shared/Overlay'
import Button from '@components/shared/Button'
import Like from '@components/shared/Like'

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: undefined,
    aspectRatio: 1 / 1,
    borderRadius: 18,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -2,
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-end',
  },
  title: {
    ...Fonts.h2,
    color: 'white',
  },
  text: {
    ...Fonts.body,
    color: 'white',
    paddingVertical: 4,
  },
  price: {
    ...Fonts.h1,
    color: Colors.gold,
  },
  priceContainer: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default ({ title, text, price, id }) => {
  return (
    <View style={styles.card}>
      <Overlay styles={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{`${price}€`}</Text>
          <View style={styles.actions}>
            <Button onPress={() => {}}>Acheter</Button>
            <Like
              style={{ marginLeft: 5 }}
              size={30}
              isSelected={false}
              color={Colors.gold}
              onClick={(selected) => alert(selected)}
            />
          </View>
        </View>
      </View>

      <Image
        style={styles.image}
        source={{ uri: 'https://picsum.photos/700' }}
      />
    </View>
  )
}
