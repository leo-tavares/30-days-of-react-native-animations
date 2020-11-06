import React from 'react';
import {FlatList, StyleSheet, useWindowDimensions} from 'react-native';
import Ball from './ball';

const Balls: React.FC = () => {
  const {width} = useWindowDimensions();
  const ballDiameter = 40;
  const offSet = 1; //discounting padding, margin...
  const maxBalls = Math.floor(width / ballDiameter) - offSet;

  const list = Array.from({length: maxBalls});
  return (
    <FlatList
      data={list}
      horizontal
      renderItem={() => <Ball />}
      contentContainerStyle={styles.container}
      keyExtractor={(_, idx) => idx.toString()}
    />
  );
};

export default Balls;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
});
