import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DetailIngradients from '../../components/molecules/DetailIngradients'
import { Gap, Back } from '../../components/atoms'



const DetailRecipe = ({ navigation }) => {
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.background}>
                    <DetailIngradients title={'Chiken Steak'} name={'Dynno Ottu'} onPress={() => navigation.goBack()} />
                </View>
                <Gap height={20} />
                <View style={styles.page}>
                    <Text style={styles.textIngredients}>Ingredients</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.textDetail}>- 2 slices whole-grain bread
                        (bakery-fresh recommended)
                        - 1 tablespoon hummus
                        - 2 slices tomato
                        - 1/2 small cucumber, thinly sliced
                        lengthwise
                        - 1 slice low-fat cheese</Text>
                    <Gap height={20} />
                </View>
                <Gap height={50} />
            </ScrollView>
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

})