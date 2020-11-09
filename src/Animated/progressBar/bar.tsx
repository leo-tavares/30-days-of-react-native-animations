import React, {useEffect, useRef} from 'react';
import {Animated, PixelRatio, StyleSheet, View} from 'react-native';

interface Props {
  progress: number; //0~1
}

const ensuresMinMax = (progress: number) => Math.min(Math.max(progress, 0), 1);
const height = PixelRatio.getPixelSizeForLayoutSize(200);
const width = PixelRatio.getPixelSizeForLayoutSize(20);

const Bar: React.FC<Props> = ({progress = 0.5}) => {
  const value = ensuresMinMax(progress);
  const progressAnim = useRef(new Animated.Value(value)).current;

  useEffect(() => {
    Animated.spring(progressAnim, {
      toValue: value,
      bounciness: 30,
      useNativeDriver: false,
    }).start();
  }, [value, progressAnim]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.progress,
          {
            height: progressAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, height],
            }),
          },
        ]}
      />
    </View>
  );
};

export default Bar;

const styles = StyleSheet.create({
  container: {
    height,
    width,
    borderWidth: 2,
    borderRadius: 16,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderColor: 'gray',
  },
  progress: {
    width,
    backgroundColor: 'lightseagreen',
  },
});
