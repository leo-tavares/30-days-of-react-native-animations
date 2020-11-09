import React, {useState} from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';
import Bar from './bar';

const ProgressBar: React.FC = () => {
  const [progress, setProgres] = useState(0);

  const Inc = () =>
    setProgres((oldProgress) => {
      if (oldProgress >= 1) {
        return 1;
      }
      return oldProgress + 0.1;
    });
  const Dec = () => setProgres(progress - 0.1);

  return (
    <View style={styles.container}>
      <Bar progress={progress} />
      <View style={styles.buttonBar}>
        <Pressable style={styles.inc} onPress={Inc}>
          <Text style={styles.lbl}>increment</Text>
        </Pressable>
        <Pressable style={styles.dec} onPress={Dec}>
          <Text style={styles.lbl}>decrement</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'azure',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 16,
    width: '80%',
  },
  inc: {
    backgroundColor: 'deepskyblue',
    padding: 8,
    borderRadius: 8,
  },
  dec: {
    backgroundColor: 'deeppink',
    padding: 8,
    borderRadius: 8,
  },
  lbl: {
    color: 'white',
  },
});
