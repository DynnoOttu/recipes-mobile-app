import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../components/atoms/Button';

const Register = () => {
  return (
    <View>
      <Text style={styles.register}>Register Page</Text>
      <Button />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  register: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 40,
  },
});
