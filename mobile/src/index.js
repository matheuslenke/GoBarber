import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import '~/config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7159c1',
  },
});

console.tron.log('Hello world');
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to React Native</Text>
    </View>
  );
}
