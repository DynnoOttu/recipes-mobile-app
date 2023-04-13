import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Button = ({ type, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type == 'secendary' ? 'white' : '#EFC81A',
    borderRadius: 10,
    paddingVertical: 15,
  }),
  text: {
    height: 28,
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Poppins-Medium',
  },
});
