import React, {useRef} from 'react';
import {
  Animated,
  PixelRatio,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Box from './box';

const Rotate: React.FC = () => {
  const boxX = useRef(new Animated.Value(0)).current;
  const boxY = useRef(new Animated.Value(0)).current;
  const boxZ = useRef(new Animated.Value(0)).current;
  const rotateX = Animated.timing(boxX, {
    toValue: 1,
    duration: 1500,
    useNativeDriver: true,
  });
  const rotateY = Animated.timing(boxY, {
    toValue: 1,
    duration: 1500,
    useNativeDriver: true,
  });
  const rotateZ = Animated.timing(boxZ, {
    toValue: 1,
    duration: 1500,
    useNativeDriver: true,
  });

  const rotateZAndX = Animated.parallel([rotateZ, rotateX]);
  const rotateZAndY = Animated.parallel([rotateZ, rotateY]);
  const rotateYAndX = Animated.parallel([rotateX, rotateY]);

  Animated.sequence([
    Animated.delay(500),
    Animated.parallel([rotateX, rotateY, rotateZ]),
  ]).start(() => {
    boxX.setValue(0);
    boxY.setValue(0);
    boxZ.setValue(0);
  });

  return (
    <View style={styles.container}>
      <Box
        style={{
          transform: [
            {
              rotateZ: boxZ.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
              }),
            },
            {
              rotateY: boxY.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
              }),
            },
            {
              rotateX: boxX.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        }}
      />
      <View style={styles.buttonBar}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => rotateZ.start(() => boxZ.setValue(0))}>
          <Text style={styles.label}>Rotate Z</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => rotateY.start(() => boxY.setValue(0))}>
          <Text style={styles.label}>Rotate Y</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => rotateX.start(() => boxX.setValue(0))}>
          <Text style={styles.label}>Rotate X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonBar}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            rotateZAndX.start(() => {
              boxZ.setValue(0);
              boxX.setValue(0);
            })
          }>
          <Text style={styles.label}>Rotate Z + X</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            rotateZAndY.start(() => {
              boxZ.setValue(0);
              boxY.setValue(0);
            })
          }>
          <Text style={styles.label}>Rotate Z + Y</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            rotateYAndX.start(() => {
              boxY.setValue(0);
              boxX.setValue(0);
            })
          }>
          <Text style={styles.label}>Rotate Y + X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Rotate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'azure',
  },
  buttonBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 8,
    marginTop: 40,
    width: '100%',
  },
  button: {
    backgroundColor: 'blueviolet',
    padding: 8,
    borderRadius: 8,
  },
  label: {
    fontSize: PixelRatio.roundToNearestPixel(20),
    color: 'white',
  },
});
