import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImgChikenSteak, ImgDessert, ImgSeafood, ImgSpaghetti } from '../../../assets/ilustration'

const PopularRecipes = ({ title }) => {

    const Icon = () => {
        if (title === 'Chiken Steak') {
            return <Image source={ImgChikenSteak} style={styles.imageFood} />
        }
        if (title === 'Spaghetti') {
            return <Image source={ImgSpaghetti} style={styles.imageFood} />
        }
        if (title === 'Ice Craem') {
            return <Image source={ImgDessert} style={styles.imageFood} />
        }
    }

    return (
        <View style={styles.container}>
            <Icon />
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default PopularRecipes

const styles = StyleSheet.create({
    imageFood: {
        height: 200,
        width: 290,
        borderRadius: 10,
        marginRight: 20
    },
    container: {
        alignSelf: 'flex-start',
        borderRadius: 10
    },
    text: {
        fontSize: 22,
        fontFamily: 'Poppins-Black',
        color: 'white',
        marginTop: -50,
        paddingLeft: 15,

    }
})