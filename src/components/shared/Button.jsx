import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from '@utils/Theme'
import { Children } from 'react'

export default function ({ onPress, children }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: Colors.gold,
    marginLeft: 5,
    marginRight: 5,
    width: 150,
  },
  text: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'CaviarDreams',
    letterSpacing: 0.25,
    color: 'black',
    textAlign: 'center',
  },
})
