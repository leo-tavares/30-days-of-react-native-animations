import React from 'react';
import {
  StyleSheet,
  Animated,
  StyleProp,
  ViewStyle,
  TransformsStyle,
} from 'react-native';
import {BOX} from './constants';

interface Props {
  style: StyleProp<ViewStyle & TransformsStyle>;
}

const Box: React.FC<Props> = ({style, ...rest}) => {
  return <Animated.View style={[styles.container, style]} {...rest} />;
};

export default Box;

const styles = StyleSheet.create({
  container: {
    height: BOX.height,
    width: BOX.width,
  },
});
