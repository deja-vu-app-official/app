import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { flex } from 'styled-system';
import { useNavigation } from '@react-navigation/native';

const BOTTOM_APPBAR_HEIGHT = 80;

const NavBar = () => {
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Appbar
      style={[
        styles.bottom,
        {
          height: BOTTOM_APPBAR_HEIGHT + bottom,
          backgroundColor: theme.colors.elevation.level2
        },
      ]}
      safeAreaInsets={{ bottom }}
    >
      <Appbar.Action icon={require('../assets/icons/Icon ionic-md-home.svg')} onPress={() => navigation.navigate('Home')} />
      <Appbar.Action icon={require('../assets/icons/Icon ionic-ios-star-full.svg')} onPress={() => navigation.navigate('Details')} />
      <Appbar.Action icon={require('../assets/icons/Icon metro-map.svg')} onPress={() => {}} />
      <Appbar.Action icon={require('../assets/icons/Icon ionic-md-download.svg')} onPress={() => {}} />
    </Appbar>
  );
};

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: 'gray',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    display: flex,
    justifyContent: 'space-around',
  },
});

export default NavBar;