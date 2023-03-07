import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '@utils/Theme'
export default ({ color = '' }) => (
  <LinearGradient
    // Background Linear Gradient
    colors={['transparent', color || Colors.overlay]}
    style={{ width: '100%', height: '100%' }}
  />
)
