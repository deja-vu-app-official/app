import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, useTheme, Avatar } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { flex } from 'styled-system';
import { useNavigation } from '@react-navigation/native';

const TOP_APPBAR_HEIGHT = 40;

const Header = () => {
  const { top } = useSafeAreaInsets();
  const theme = useTheme();
  const navigation = useNavigation();
  
  const _handleSearch = () => console.log('Searching');

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
      <View style={styles.profile}>
        <Appbar.Action icon='magnify' onPress={() => _handleSearch()} />
        <Avatar.Image size={24} source={require('../assets/avatars/Titanic Southampton.jpg')}/>
      </View>
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
    justifyContent: 'space-between',
    zIndex: 2,
  },
  profile: {
    display: flex,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Header;