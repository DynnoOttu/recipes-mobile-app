import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { dUser } from '../../../assets'
import { Gap } from '../../atoms'

const ProfileComponent = ({ nameUser }) => {
    return (
        <View style={styles.container}>
            <Gap height={50} />
            <View>
                <Image source={dUser} style={styles.avatar} />
            </View>
            <Gap height={20} />
            <Text style={styles.name}>{nameUser}</Text>
            <Gap height={20} />
        </View>
    )
}

export default ProfileComponent

const styles = StyleSheet.create({
    avatar: {
        width: 120, height: 120, borderRadius: 120 / 2
    },
    container: {
        justifyContent: 'center', alignItems: 'center',
    },
    name: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        color: 'white'
    }
})