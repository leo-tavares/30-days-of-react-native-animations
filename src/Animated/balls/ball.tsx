import React, {useRef} from 'react';
import {Animated, StyleSheet, useWindowDimensions} from 'react-native';

const Ball: React.FC = () => {
  const {height} = useWindowDimensions();
  const ballY = useRef(new Animated.Value(0)).current;

  const upToDown = Animated.timing(ballY, {
    toValue: height,
    useNativeDriver: true,
  });
  const downToUp = Animated.timing(ballY, {
    toValue: 0,
    useNativeDriver: true,
  });
  const sequenceAnim = Animated.sequence([
    upToDown,
    Animated.delay(200),
    downToUp,
    Animated.delay(200),
  ]);
  const loopAnim = Animated.loop(sequenceAnim);
  loopAnim.start();

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: ballY,
            },
          ],
          opacity: ballY.interpolate({
            inputRange: [0, 0.6 * height, height],
            outputRange: [1, 0.8, 0],
          }),
        },
      ]}
    />
  );
};

export default Ball;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    borderRadius: 20,
    margin: 2,
    backgroundColor: '#57e02d',
  },
});
