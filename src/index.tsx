import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import Rotate from './Animated/rotate';
import SignIn from './Animated/signIn';

function App() {
  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        {/* <SignIn /> */}
        <Rotate />
      </View>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
