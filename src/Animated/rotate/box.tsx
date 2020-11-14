import React from 'react';
import {
  StyleSheet,
  Animated,
  StyleProp,
  ViewStyle,
  TransformsStyle,
  PixelRatio,
} from 'react-native';

interface Props {
  style: StyleProp<ViewStyle & TransformsStyle>;
}

const Box: React.FC<Props> = ({style, ...rest}) => {
  return <Animated.View style={[styles.container, style]} {...rest} />;
};

export default Box;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00ced1',
    borderWidth: 1,
    marginBottom: 40,
    height: PixelRatio.getPixelSizeForLayoutSize(70),
    width: PixelRatio.getPixelSizeForLayoutSize(70),
  },
});
