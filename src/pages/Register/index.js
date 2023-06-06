import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { ImgLogin } from '../../assets';
import { Button, Gap, Input, Link } from '../../components/atoms';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterUser } from '../../Storage/Action/Register/register';

const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch();
  const navigation = useNavigation()

  const register = useSelector((state) => state.AuthReg)

  const handleRegister = () => {
    let data = {
      name,
      email,
      password
    }
    dispatch(RegisterUser(data, navigation))
  }



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
          <TextInput style={styles.input} placeholder='Your Name' value={name}
            onChangeText={(e) => setName(e)} require />
          <Gap height={10} />
          <TextInput style={styles.input} placeholder='Your Email' value={email}
            onChangeText={(e) => setEmail(e)} require />
          <Gap height={10} />
          <TextInput style={styles.input} placeholder='Your Password' onChangeText={(e) => setPassword(e)} value={password} secureTextEntry={true} require />
          <Gap height={10} />
          <Link title="Forgot Password ?" align="right" onPress={() => navigation.navigate('ForgotPassword')} />
          <Gap height={20} />
          <Button title="REGISTER" onPress={handleRegister} />
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
