import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { title } from '../../constants/Style';
import { ButtonProps } from './index';

const WithountBackground = ({ text, onPress, style }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.container, ...style }}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  text: {
    ...title
  }
});

export default WithountBackground;