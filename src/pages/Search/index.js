import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Gap } from '../../components/atoms'
import { ImgPizza } from '../../assets/ilustration'
import { ICRating } from '../../assets/icons'

const Search = () => {
    return (
        <View style={styles.page}>
            <Text style={styles.textInput}>Search Pasta, Bread , etc</Text>
            <Gap height={30} />
            <View style={styles.container}>
                <View style={styles.contentImage}>
                    <Image source={ImgPizza} style={styles.image} />
                </View >
                <View style={styles.content}>
                    <Text style={styles.title}>pizza</Text>
                    <View style={styles.contentRating}>
                        <Image source={ICRating} style={styles.imgRating} />
                        <Text style={styles.textRating}>4.5</Text>
                        <Text style={styles.textCategory}>Deassert</Text>
                    </View>
                </View>
            </View>


        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#EFEFEF',
        paddingLeft: 20,
        borderRadius: 10,
        fontSize: 18,
        fontStyle: 'Poppins',
        height: 50,
        paddingTop: 15,

    },
    page: {
        padding: 20,
        backgroundColor: 'white',
        flex: 1

    },
    image: {
        height: 110,
        width: 110,
        borderRadius: 10,
    },
    container: {
        flexDirection: 'row'
    },
    contentRating: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 26,
        fontFamily: 'Poppins-Medium',
        color: '#18172B',
    },
    imgRating: {
        height: 24,
        width: 24
    },
    textCategory: {
        fontSize: 20,
        marginLeft: 20,
        color: '#6E80B0',
        fontFamily: 'Poppins-Medium'
    },
    textRating: {
        marginLeft: 20,
        fontSize: 18,
        alignItems: 'center',
        color: '#18172B',
        fontFamily: 'Poppins-Medium'
    },

    content: {
        marginLeft: 20,
        marginTop: 15
    }


})