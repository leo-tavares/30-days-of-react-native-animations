import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View, Keyboard, PixelRatio} from 'react-native';
import netFlixLogo from './img/netflix.png';
import Form from './form';
import Logo from './logo';
import {device} from './contants';

const SignIn: React.FC = () => {
  const logoAnim = useRef(new Animated.Value(0)).current;
  const formContainerAnim = useRef(new Animated.Value(0)).current;
  const emailAnim = useRef(new Animated.Value(0)).current;
  const passwordAnim = useRef(new Animated.Value(0)).current;
  const buttonAnim = useRef(new Animated.Value(0)).current;

  const logoEntry = Animated.timing(logoAnim, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true,
  });

  const formContainerEntry = Animated.timing(formContainerAnim, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true,
  });

  const parallelAnimation = Animated.parallel([logoEntry, formContainerEntry]);

  const emailEntry = Animated.timing(emailAnim, {
    toValue: 1,
    duration: 400,
    useNativeDriver: true,
  });
  const passwordEntry = Animated.timing(passwordAnim, {
    toValue: 1,
    duration: 400,
    useNativeDriver: true,
  });
  const buttonEntry = Animated.timing(buttonAnim, {
    toValue: 1,
    duration: 400,
    useNativeDriver: true,
  });

  const staggerAnimation = Animated.stagger(150, [
    parallelAnimation,
    emailEntry,
    passwordEntry,
    buttonEntry,
  ]);
  //Animated.delay simulate task
  const sequence = Animated.sequence([Animated.delay(1500), staggerAnimation]);

  sequence.start();

  useEffect(() => {
    const onShowlistener = Keyboard.addListener('keyboardDidShow', () => {
      Animated.parallel([
        Animated.timing(logoAnim, {
          toValue: 1.8,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(formContainerAnim, {
          toValue: 1.1,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start();
    });
    const onHidelistener = Keyboard.addListener('keyboardDidHide', () => {
      Animated.parallel([
        Animated.timing(logoAnim, {
          toValue: 1.0,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(formContainerAnim, {
          toValue: 1.0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start();
    });
    return () => {
      onShowlistener.remove();
      onHidelistener.remove();
    };
  }, [formContainerAnim, logoAnim]);

  const offSetFormContainer = PixelRatio.roundToNearestPixel(100); // +/- height/2
  const offSetKeyboardShow = PixelRatio.roundToNearestPixel(130);
  const offSetLogoKeyboardShow =
    PixelRatio.roundToNearestPixel(40) + offSetKeyboardShow;
  return (
    <View style={styles.container}>
      <Logo
        source={netFlixLogo}
        style={{
          transform: [
            {
              scale: logoAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0.6],
              }),
            },
            {
              translateY: logoAnim.interpolate({
                inputRange: [0, 1, 1.8],
                outputRange: [offSetFormContainer, 0, -offSetLogoKeyboardShow],
              }),
            },
          ],
        }}
      />
      <Form
        containerStyle={{
          transform: [
            {
              translateY: formContainerAnim.interpolate({
                inputRange: [0, 1, 1.1],
                outputRange: [device.height, 0, -offSetKeyboardShow],
              }),
            },
          ],
        }}
        itemStyle={{
          login: {
            transform: [
              {
                scale: emailAnim,
              },
            ],
          },
          password: {
            transform: [
              {
                scale: passwordAnim,
              },
            ],
          },
          button: {
            transform: [
              {
                scale: buttonAnim,
              },
            ],
          },
        }}
      />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
