/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <StatusBar barStyle="dark-content" />
      <Text> Count : {count}</Text>

      <TouchableOpacity
        onPress={() => {
          setCount(count + 1);
        }}
        style={styles.button}>
        <Text>Press Me Count </Text>
      </TouchableOpacity>

      <Text style={{marginVertical: 20}}> Hello : {name}</Text>
      <TouchableOpacity
        onPress={() => {
          setName('Andy ');
        }}
        style={styles.button}>
        <Text>Press Me Name</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF5733',
    padding: 10,
  },
});

export default App;
