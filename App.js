/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <StatusBar barStyle="dark-content" />

      <TouchableOpacity
        onPress={() => {
          alert('HEllo World');
        }}
        style={styles.button}>
        <Text>Press Me </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF5733',
    padding: 10,
  },
});

export default App;
