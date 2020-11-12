import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
// import Balls from './Animated/balls';
// import Touchs from './Animated/panResponder';
// import ProgressBar from './Animated/progressBar';
import SignIn from './Animated/signIn';

function App() {
  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        {/* <Balls /> */}
        {/* <Touchs /> */}
        {/* <ProgressBar /> */}
        <SignIn />
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
