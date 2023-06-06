import { ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import DetailIngradients from '../../components/molecules/DetailIngradients'
import { Gap, Back } from '../../components/atoms'
import { useRoute } from '@react-navigation/native'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DetailRecipes from '../../Storage/Action/Recipes/detailRecipes'




const DetailRecipe = ({ navigation }) => {

    const route = useRoute()
    const dispatch = useDispatch()
    const item = route.params.id


    const data = useSelector(state => state.DetailReducers.data)

    useEffect(() => {
        dispatch(DetailRecipes(item))
    }, [dispatch])


    return (
        <View>
            {data.map((item) => {
                return (

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={styles.pageImage}>
                            <ImageBackground source={{ uri: `${item.photo}` }} style={styles.imgBg}>
                                <TouchableOpacity>
                                    <Back onPress={() => navigation.goBack()} />
                                </TouchableOpacity>
                                <Gap height={170} />
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.name}>{item.creator}</Text>
                            </ImageBackground>
                        </View>

                        <Gap height={20} />
                        <View style={styles.page}>
                            <Text style={styles.textIngredients}>Ingredients</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={styles.textDetail}>{item.ingredients}</Text>
                            <Gap height={20} />
                        </View>
                        <Gap height={50} />
                    </ScrollView>
                )
            })}
        </View>
    )
}

export default DetailRecipe

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        borderBottomLeftRadius: 60,
    },
    pageIngredients: {
        borderTopLeftRadius: 900
    },
    page: {
        padding: 20
    },
    textIngredients: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        color: '#18172B'
    },
    detail: {
        backgroundColor: '#FAF7ED',
        width: 360,
        marginLeft: 20,
        borderRadius: 20
    },
    textDetail: {
        paddingLeft: 22,
        paddingRight: 70,
        fontSize: 20,
        textAlign: 'left',
        fontFamily: 'Poppins-Medium'
    },

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