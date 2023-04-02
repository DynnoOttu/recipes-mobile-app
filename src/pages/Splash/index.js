import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.page}>
      <Text style={styles.titile}>Recipes App</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'while',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titile: {
    fontSize: 40,
    fontWeight: '600',
    color: '#EFC81A',
  },
});
