import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Link = ({ title, title2, align, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(align)}>
        {title}
        <Text style={styles.text2}>{title2} </Text>
      </Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: align => ({
    fontSize: 12,
    color: '#999999',
    fontFamily: 'Poppins',
    textAlign: align,
  }),
  text2: {
    color: '#EFC81A',
  },
});
