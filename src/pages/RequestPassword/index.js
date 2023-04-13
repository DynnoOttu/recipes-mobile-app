import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Button, Gap, Input } from '../../components/atoms'
import { IconLock } from '../../assets'

const ForgotPassword = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Image source={IconLock} style={styles.image} />
                </View>
                <Gap height={50} />
                <Text style={styles.text}>Request for reset password send in your email</Text>
                <Gap height={240} />
                <Button title="Check your Email" onPress={() => navigation.navigate('ResetPassword')} />
            </ScrollView>
        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    page: {
        padding: 40,
        backgroundColor: '#f6f7f8',
        flex: 1,
    },
    title: {
        fontFamily: 'Poppins-Medium',
        fontSize: 26,
        color: '#EFC81A',
        textAlign: 'center'
    },
    text: {
        fontFamily: 'Poppins-reguler',
        fontSize: 16,
        color: '#C4C4C4',
        textAlign: 'center'
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 50
    }
})