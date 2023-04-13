import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ICChiken, ICDessert, ICSeafood, ICSoup } from '../../../assets/icons'


const CategoryRecipes = ({ title }) => {
    const IconCategory = () => {
        if (title === 'Soup') {
            return <Image source={ICSoup} style={styles.image} />
        }
        if (title === 'Chiken') {
            return <Image source={ICChiken} style={styles.image} />
        }
        if (title === 'Seafood') {
            return <Image source={ICSeafood} style={styles.image} />
        }
        if (title === 'Deassert') {
            return <Image source={ICDessert} style={styles.image} />
        }
    }
    return (
        <View style={styles.page}>
            <IconCategory />
            <View>
                <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    )
}

export default CategoryRecipes

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: 'Poppins',
        textAlign: 'center'
    },
})