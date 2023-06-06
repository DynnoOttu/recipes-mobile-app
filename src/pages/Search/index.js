import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { Gap } from '../../components/atoms'
import { ImgPizza } from '../../assets/ilustration'
import { ICRating } from '../../assets/icons'
import RecipesAction from '../../Storage/Action/Recipes/recipesAction'
import DetailRecipes from '../../Storage/Action/Recipes/detailRecipes'
import { TextInput } from 'react-native-gesture-handler'

const Search = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const recipes = useSelector(state => state.recipes)

    const [text, setText] = useState()
    console.log(text)


    useEffect(() => {
        dispatch(RecipesAction(text))
    }, [text])


    const handlePress = (id) => {
        dispatch(DetailRecipes(id))
        navigation.navigate('DetailRecipe', { id: id })
    }


    return (
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TextInput onChangeText={(value) => setText(value)} placeholder='Search Pasta, Bread , etc' style={styles.textInput}></TextInput>
                <Gap height={30} />
                {recipes.data.map(item => {
                    return (
                        <TouchableOpacity onPress={() => handlePress(item.id)} key={item.id}>

                            <View style={styles.container}>
                                <View style={styles.contentImage}>
                                    <Image source={{ uri: `${item.photo}` }} style={styles.image} />
                                </View >
                                <View style={styles.content}>

                                    <Text style={styles.title}>{item.title}</Text>
                                    <View style={styles.contentRating}>
                                        <Image source={ICRating} style={styles.imgRating} />
                                        <Text style={styles.textRating}>4.5</Text>
                                        <Text style={styles.textCategory}>{item.category}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
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
        width: 24,
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
    },
    contentImage: {
        paddingBottom: 10
    }


})