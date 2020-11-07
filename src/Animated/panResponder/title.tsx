import React from 'react';
import {PixelRatio, StyleSheet, Text} from 'react-native';

const Title: React.FC = () => {
  return (
    <Text style={styles.container}>
      Drag the box along the either y axis or x axis
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: PixelRatio.roundToNearestPixel(16),
    position: 'absolute',
    top: PixelRatio.getPixelSizeForLayoutSize(10),
  },
});

export default Title;
