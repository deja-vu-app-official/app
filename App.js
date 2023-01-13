import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {MD3LightTheme as DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import NavBar from './src/infrastructure/navigation/NavBar.js';
import Highlight from './src/components/Highlight.js';
import HomeTable from './src/components/HomeTable.js';
import Header from './src/components/Header.js';
import FavTable from './src/components/Favorites.js';
import Map from './src/components/Map.js';
import Download from './src/components/Download.js';
import Place from './src/components/Place.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

function HomeScreen() {
  return (
    <PaperProvider theme={theme}>
      <View style={{ margin: 0 }}>
        <Header/>
        <Highlight/>
        <HomeTable navigation={useNavigation()}/>
        <NavBar/>
      </View>
    </PaperProvider>
  );
}

function FavoritScreen() {
  return (
    <PaperProvider theme={theme}>
      <View style={{ margin: 0 }}>
        <Header/>
        <FavTable/>
        <NavBar/>
      </View>
    </PaperProvider>
  );
}

function MapScreen() {
  return (
    <PaperProvider theme={theme}>
      <View style={{ margin: 0 }}>
        <Header/>
        <Map/>
        <NavBar/>
      </View>
    </PaperProvider>
  );
}

function DownloadScreen() {
  return (
    <PaperProvider theme={theme}>
      <View style={{ margin: 0 }}>
        <Header/>
        <Download/>
        <NavBar/>
      </View>
    </PaperProvider>
  );
}

function PlaceScreen() {
  return (
    <PaperProvider theme={theme}>
      <View style={{ margin: 0 }}>
        <Header/>
        <Place navigation={useNavigation()}/>
        <NavBar/>
      </View>
    </PaperProvider>
  );
}

const Stack = createNativeStackNavigator();

export default class App extends Component {
 
  render(){
    return(
      <NavigationContainer>{
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Favorites" component={FavoritScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Download" component={DownloadScreen} />
          <Stack.Screen name="Place" component={PlaceScreen} />
        </Stack.Navigator>
      }</NavigationContainer>
    )}
}