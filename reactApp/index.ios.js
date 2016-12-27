import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View>
    <Header headerText={'Home'} />
    <AlbumList />
  </View>
  );
AppRegistry.registerComponent('reactApp', () => App);
