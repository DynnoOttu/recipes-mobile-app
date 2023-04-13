import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import React from 'react';
import { ImgLogin } from '../../assets';
import { Button, Gap, Input, Link } from '../../components/atoms';

const Register = ({ navigation }) => {
  return (
    <View style={styles.pageBg}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image source={ImgLogin} style={styles.image} />
        </View>
        <View style={styles.page}>
          <Text style={styles.welcome}>Welcome!</Text>
          <Text style={styles.text}>Register to Recipe App</Text>
          <Gap height={20} />
          <Input label="myname" />
          <Gap height={10} />
          <Input label="examplexxx@gmail.com" />
          <Gap height={10} />
          <Input label="password" />
          <Gap height={10} />
          <Link title="Forgot Password ?" align="right" onPress={() => navigation.navigate('ForgotPassword')} />
          <Gap height={20} />
          <Button title="REGISTER" />
          <Gap height={10} />
          <Link
            onPress={() => navigation.navigate('Login')}
            title={'have an account?'}
            title2={'  Sign In'}
            style={styles.link}
            align="center"
            color="#EFC81A"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  image: {
    height: 210,
    width: 410,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcome: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 30,
    color: '#EFC81A',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    color: '#C4C4C4',
  },
  page: {
    padding: 40,
  },
  pageBg: {
    backgroundColor: 'white',
    flex: 1,
  },
});
