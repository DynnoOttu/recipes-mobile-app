import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/molecules/Header'
import { dChikenSteak } from '../../assets'
import PopularMenu from '../../components/molecules/PopularMenu'
import { Gap } from '../../components/atoms'
import { ICLike, ICSaveOn } from '../../assets'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import DetailRecipes from '../../Storage/Action/Recipes/detailRecipes'
import RecipesAction from '../../Storage/Action/Recipes/recipesAction'
import { useNavigation } from '@react-navigation/native'



const PoplarMenu = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation()
    const recipes = useSelector(state => state.recipes)


    useEffect(() => {
        dispatch(RecipesAction())
    }, [])

    const handlePress = (id) => {
        dispatch(DetailRecipes(id))
        navigation.navigate('DetailRecipe', { id: id })
    }

    return (
        <View style={styles.page}>
            <Header title={'Popular Menu'} onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                {recipes.data.map(item => {
                    return (
                        <TouchableOpacity key={item.id} onPress={() => handlePress(item.id)}>
                            <View style={styles.content} >
                                <Image source={{ uri: `${item.photo}` }} style={styles.image} />
                                <View style={styles.details}>
                                    <Text style={styles.menu}>{item.title}</Text>
                                    <Text style={styles.category}>{item.category}</Text>
                                    <Text style={styles.name}>{item.creator}</Text>
                                    <Gap height={20} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>

        </View>
    )
}

export default PoplarMenu

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 10
    },
    content: {
        flexDirection: 'row',
        paddingLeft: 25
    },
    details: {
        marginLeft: 20,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    Icon: {
        flexDirection: 'row',
        marginLeft: 30,
        alignItems: 'center'
    },
    saveOn: {
        marginRight: 10
    },
    menu: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        color: '#18172B'
    },
    category: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        color: '#18172B'
    },
    name: {
        fontFamily: 'Poppins-Black',
        color: '#6E80B0',
        fontSize: 18
    }

})