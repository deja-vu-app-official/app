import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '@utils/Theme'
export default () => (
  <LinearGradient
    // Background Linear Gradient
    colors={['transparent', Colors.overlay]}
    style={{ width: '100%', height: '100%' }}
  />
)
