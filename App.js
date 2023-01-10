import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {MD3LightTheme as DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {API_TOKEN} from '@env';
import NavBar from './components/NavBar.js';
import Highlight from './components/Highlight.js';
import HomeTable from './components/HomeTable.js';
import { NavigationContainer } from '@react-navigation/native';

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

export default class App extends Component {
 
  render(){
    return(
      <PaperProvider theme={theme}>
        <View style={{ margin: 0 }}>
          <Highlight/>
          <HomeTable/>
        <NavBar/>
        </View>
      </PaperProvider>
    )}
}