import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ImgChikenSteak, ImgJuice, ImgPizza, ImgSeafood, ImgSpaghetti } from '../../../assets'
import { Gap } from '../../atoms'


const PopularForYou = ({ title, detail, onPress }) => {
    const ImagePopular = () => {
        if (title === 'Chiken Steak') {
            return <Image source={ImgChikenSteak} style={styles.imageFood} />
        }

        if (title === 'Pizza') {
            return <Image source={ImgPizza} style={styles.imageFood} />
        }

        if (title === 'Seafood') {
            return <Image source={ImgSeafood} style={styles.imageFood} />
        }

        if (title === 'Juice') {
            return <Image source={ImgJuice} style={styles.imageFood} />
        }

    }
    return (
        <View style={styles.page}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.container}>
                    <ImagePopular />
                </View>
                <View style={styles.title}>
                    <Text style={styles.text}>{title}</Text>
                    <Text style={styles.detail}>{detail}</Text>
                    <Gap height={20} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default PopularForYou

const styles = StyleSheet.create({
    imageFood: {
        height: 120,
        width: 260,
        borderRadius: 10,
        marginRight: 20
    },
    container: {
        alignSelf: 'flex-start',
        borderRadiusButtom: 10,
    },
    text: {
        fontSize: 22,
        fontFamily: 'Poppins-Black',
        paddingLeft: 20,
        color: 'black'

    },
    detail: {
        marginTop: -5,
        fontSize: 14,
        fontFamily: 'Poppins',
        color: 'black',
        paddingLeft: 20,
    },
    title: {
        width: 260,
        backgroundColor: 'white',
        elevation: 12,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10

    },
})