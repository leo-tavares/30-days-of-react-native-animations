import React from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  Pressable,
  ViewStyle,
  TextInput,
  PixelRatio,
} from 'react-native';
import {device} from './contants';

interface Props {
  containerStyle: ViewStyle;
  itemStyle: {
    login: ViewStyle;
    password: ViewStyle;
    button: ViewStyle;
  };
}

const Form: React.FC<Props> = ({containerStyle, itemStyle}) => {
  return (
    <Animated.View style={[styles.container, {...containerStyle}]}>
      <Animated.View style={[styles.formElement, {...itemStyle.login}]}>
        <TextInput
          style={styles.input}
          maxLength={60}
          keyboardType="email-address"
          placeholder="Email"
        />
      </Animated.View>
      <Animated.View style={[styles.formElement, {...itemStyle.password}]}>
        <TextInput
          style={styles.input}
          secureTextEntry
          maxLength={12}
          placeholder="Password"
        />
      </Animated.View>
      <Animated.View style={{...itemStyle.button}}>
        <Pressable style={styles.callToActionBtn}>
          <Text style={styles.callToActionLbl}>SignIn</Text>
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: PixelRatio.roundToNearestPixel(190),
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#ffffff88',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formElement: {
    marginVertical: 8,
    height: PixelRatio.roundToNearestPixel(45),
    width: 0.85 * device.width,
    borderRadius: 8,
    backgroundColor: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  input: {
    width: '100%',
    textAlign: 'left',
  },
  callToActionBtn: {
    height: PixelRatio.roundToNearestPixel(45),
    width: 0.85 * device.width,
    borderRadius: 8,
    backgroundColor: '#ff0021ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  callToActionLbl: {
    fontSize: 24,
    color: '#fff',
  },
});

export default Form;
