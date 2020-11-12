import React from 'react';
import {Animated, ImageProps, PixelRatio, StyleSheet} from 'react-native';

interface LogoProps extends ImageProps {}

const Logo: React.FC<LogoProps> = (props) => {
  return <Animated.Image style={styles.container} {...props} />;
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    height: PixelRatio.getPixelSizeForLayoutSize(100),
    width: PixelRatio.getPixelSizeForLayoutSize(70),
  },
});
