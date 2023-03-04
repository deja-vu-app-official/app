import React from 'react'
import { View, SafeAreaView, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'
import Home from '@screens/Home'
import Map from '@screens/Map'
import Downloads from '@screens/Downloads'
import Wishlist from '@screens/Wishlist'
import Search from '@screens/Search'
import Account from '@screens/Account'
import Place from '@screens/Place'
import Circuit from '@screens/Circuit'
import { Colors } from '@utils/Theme'
import Footer from '@components/global/Footer'
import Header from '@components/global/Header'

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
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor="transparent"
      />
      <View className="flex-1">
        <NavigationContainer style={{ backgroundColor: Colors.black }}>
          <Header />
          <Stack.Navigator
            initialRouteName="Home"
            style={{ backgroundColor: Colors.black }}
          >
            <Stack.Screen
              name="Home"
              component={Home}
              options={GLOBAL_OPTIONS}
            />
            <Stack.Screen name="Map" component={Map} options={GLOBAL_OPTIONS} />
            <Stack.Screen
              name="Wishlist"
              component={Wishlist}
              options={GLOBAL_OPTIONS}
            />
            <Stack.Screen
              name="Downloads"
              component={Downloads}
              options={GLOBAL_OPTIONS}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={GLOBAL_OPTIONS}
            />
            <Stack.Screen
              name="Account"
              component={Account}
              options={GLOBAL_OPTIONS}
            />
            <Stack.Screen
              name="Place"
              component={Place}
              options={GLOBAL_OPTIONS}
            />
            <Stack.Screen
              name="Circuit"
              component={Circuit}
              options={GLOBAL_OPTIONS}
            />
          </Stack.Navigator>
          <Footer />
        </NavigationContainer>
      </View>
    </SafeAreaView>
  )
}
