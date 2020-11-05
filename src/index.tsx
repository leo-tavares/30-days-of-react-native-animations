import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <Text>30 days animations challenge </Text>
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
