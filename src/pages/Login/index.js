import { StyleSheet, Text, View, Image, ActivityIndicator, Alert, TextInput } from 'react-native';
import React from 'react';
import { ImgLogin } from '../../assets';
import { Button, Gap, Link, Loading, Input } from '../../components/atoms';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { LoginUser } from '../../Storage/Action/Login/login';
import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const navigation = useNavigation()

  const login = useSelector((state) => state.Auth_Login)



  const handleLogin = () => {
    let data = {
      email,
      password
    }

    if (password.trim() === '' && email.trim() === '') {
      Alert.alert('Error', 'Masukkan email & password');
      return;
    }
    if (email.trim() === '') {
      Alert.alert('Error', 'Masukkan email');
      return;
    }
    if (password.trim() === '') {
      Alert.alert('Error', 'Masukkan password');
      return;
    }
    dispatch(LoginUser(data, navigation));
  };



  return (
    <View style={styles.pageBg}>
      <View>
        <Image source={ImgLogin} style={styles.image} />
      </View>
      <View style={styles.page}>
        <Text style={styles.welcome}>Welcome!</Text>
        <Text style={styles.text}>Log in to your exiting account.</Text>
        <Gap height={20} />
        <TextInput style={styles.input} placeholder="examplexxx@gmail.com" value={email} onChangeText={(e) => setEmail(e)} keyboardType={'email-address'} require />
        <Gap height={10} />
        <TextInput style={styles.input} placeholder="password" value={password} onChangeText={(e) => setPassword(e)} secureTextEntry={true} require />
        <Gap height={5} />
        <Link
          title="Forgot Password ?"
          align="right"
          onPress={() => navigation.navigate('ForgotPassword')}
        />
        <Gap height={20} />
        <Button title="Login" onPress={() => handleLogin()} />
        <Gap height={10} />
        {login.isLoading &&
          <ActivityIndicator style={{ marginTop: 10 }} size="large" color="black" />
        }
        <Link
          onPress={() => navigation.navigate('Register')}
          title={'Don’t have an account?'}
          title2={' Sign Up'}
          style={styles.link}
          align="center"
          color="#EFC81A"
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: {
    height: 210,
    width: 410,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 50,
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
