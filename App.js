import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Mr Kaseman</Text>
        <Text>Today, we learn.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7EA8BE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
