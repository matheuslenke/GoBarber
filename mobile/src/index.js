import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Routes from './routes';

import '~/config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7159c1',
  },
});

export default function App() {
  return <Routes isLoggedIn={false} />;
}
