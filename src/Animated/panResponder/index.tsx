import React, {useRef} from 'react';
import {Animated, PanResponder, StyleSheet, View} from 'react-native';
import Box from './box';
import {boxMoveLimit} from './constants';
import Title from './title';

const Touchs: React.FC = () => {
  const moveBox = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        moveBox.setOffset({
          x: moveBox.x._value,
          y: moveBox.y._value,
        });
      },
      onPanResponderMove: Animated.event(
        [null, {dx: moveBox.x, dy: moveBox.y}],
        {
          useNativeDriver: false,
          listener: () => {},
        },
      ),
      onPanResponderRelease: () => {
        moveBox.flattenOffset();
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Title />
      <Box
        style={{
          transform: [
            {
              translateX: moveBox.x.interpolate({
                inputRange: [boxMoveLimit.left, boxMoveLimit.right],
                outputRange: [boxMoveLimit.left, boxMoveLimit.right],
                extrapolate: 'clamp',
              }),
            },
            {
              translateY: moveBox.y.interpolate({
                inputRange: [boxMoveLimit.top, boxMoveLimit.bottom],
                outputRange: [boxMoveLimit.top, boxMoveLimit.bottom],
                extrapolate: 'clamp',
              }),
            },
          ],
          backgroundColor: moveBox.x.interpolate({
            inputRange: [boxMoveLimit.left, boxMoveLimit.right],
            outputRange: ['rgb(54, 173, 104)', 'rgb(77, 121, 255)'],
          }),
          opacity: moveBox.y.interpolate({
            inputRange: [boxMoveLimit.top, 0, boxMoveLimit.bottom],
            outputRange: [0.4, 0.8, 1],
            extrapolate: 'clamp',
          }),
        }}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'azure',
  },
});

export default Touchs;
