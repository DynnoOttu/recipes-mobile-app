import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Back, Gap } from '../../atoms'
import { dChikenSteak } from '../../../assets'

const DetailIngradients = ({ onPress, title, name }) => {
    return (
        <View style={styles.page}>
            <ImageBackground source={dChikenSteak} style={styles.imgBg}>
                <TouchableOpacity>
                    <Back onPress={onPress} />
                </TouchableOpacity>
                <Gap height={170} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.name}>{name}</Text>
            </ImageBackground>
            <View style={styles.cc}>

            </View>
        </View>
    )
}

export default DetailIngradients

const styles = StyleSheet.create({
    imgBg: {
        width: 550,
        height: 350,
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontFamily: 'Poppins-Black',
        color: 'white',
    },
    name: {
        fontSize: 20,
        fontFamily: 'Poppins-Black',
        color: '#B0B0B0',
    },
})