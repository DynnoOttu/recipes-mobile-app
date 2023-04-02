import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ImgLogin} from '../../assets';

const Login = () => {
  return (
    <View>
      <Image source={ImgLogin} style={styles.image} />
      <Text style={styles.welcome}>Welcome!</Text>
      <Text>Log in to your exiting account.</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 410,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcome: {
    marginTop: 40,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 30,
    color: '#EFC81A',
  },
});
