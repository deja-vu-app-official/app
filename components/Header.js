import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { flex } from 'styled-system';
import { useNavigation } from '@react-navigation/native';

const TOP_APPBAR_HEIGHT = 40;

const Header = () => {
  const { top } = useSafeAreaInsets();
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Appbar.Header
      style={[
        styles.top,
        {
          height: TOP_APPBAR_HEIGHT,
          backgroundColor: theme.colors.elevation.level2
        },
      ]}
      safeAreaInsets={{ top }}
    >
      <Appbar.Action icon={require('../assets/icons/Symbole 1 color.svg')} onPress={() => navigation.navigate('Home')} />
      <Text>Univers</Text>
      <Text>Type</Text>
      <Text>Genre</Text>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  top: {
    backgroundColor: 'gray',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    display: flex,
    justifyContent: 'space-around',
    zIndex: 2,
  },
});

export default Header;