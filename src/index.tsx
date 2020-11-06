import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import Balls from './Animated/balls';

const App: React.FC = () => {
  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <Balls />
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
