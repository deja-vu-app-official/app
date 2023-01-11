import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {MD3LightTheme as DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import NavBar from './components/NavBar.js';
import Highlight from './components/Highlight.js';
import HomeTable from './components/HomeTable.js';
import Header from './components/Header.js';
import FavTable from './components/Favorites.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const styles = StyleSheet.create({
  highlightImage: {
    width: '100%',
  },
  highlightBanner: {
    width: '100%',
    height: 500,
  },
  highlightText: {
    width: '100%',
    height: 500,
    position: 'absolute',
    zIndex: 2
  },
  cardImage: {
    width: '10%',
    height: 100
  }
});

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
        <HomeTable/>
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

const Stack = createNativeStackNavigator();

export default class App extends Component {
 
  render(){
    return(
      <NavigationContainer>{
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={FavoritScreen} />
        </Stack.Navigator>
      }</NavigationContainer>
    )}
}