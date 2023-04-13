import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

const Input = ({ label, right }) => {
  return (
    <View>
      <TextInput
        placeholder={label}
        style={styles.input}
        placeholderTextColor={'#EFC81A'}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#EFC81A',
    fontSize: 14,
    fontFamily: 'Poppins',
    height: 60,
    backgroundColor: '#F5F5F5',
    padding: 12
  },
});
