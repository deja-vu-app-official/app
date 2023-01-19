import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '@utils/Theme'
export default ({ styles }) => (
  <LinearGradient
    // Background Linear Gradient
    colors={['transparent', Colors.overlay]}
    style={styles}
  />
)
