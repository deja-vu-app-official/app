import React from 'react'
import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'
import Home from '@screens/Home'
import Map from '@screens/Map'
import { Colors } from '@utils/Theme'

const Stack = createNativeStackNavigator()

const GLOBAL_OPTIONS = {
  headerShown: false,
}

export default function App() {
  const [fontsLoaded] = useFonts({
    CaviarDreams: require('./assets/fonts/CaviarDreams/CaviarDreams-Bold.ttf'),
    Inter: require('./assets/fonts/Inter/Inter-Regular.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter/Inter-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaView style={{ backgroundColor: Colors.black, flex: 1 }}>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.black} />
      <NavigationContainer style={{ backgroundColor: Colors.black }}>
        <Stack.Navigator
          initialRouteName="Home"
          style={{ backgroundColor: Colors.black }}
        >
          <Stack.Screen name="Home" component={Home} options={GLOBAL_OPTIONS} />
          <Stack.Screen name="Map" component={Map} options={GLOBAL_OPTIONS} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}
