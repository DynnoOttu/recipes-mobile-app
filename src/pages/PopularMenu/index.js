import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/molecules/Header'
import { dChikenSteak } from '../../assets'
import PopularMenu from '../../components/molecules/PopularMenu'
import { Gap } from '../../components/atoms'

const PoplarMenu = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header title={'Popular Menu'} onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <PopularMenu onPress={() => navigation.navigate('DetailRecipe')} />
                    <Gap height={20} onPress={() => navigation.navigate('DetailRecipe')} />
                    <PopularMenu />
                    <Gap height={20} onPress={() => navigation.navigate('DetailRecipe')} />
                    <PopularMenu />
                    <Gap height={20} onPress={() => navigation.navigate('DetailRecipe')} />
                    <PopularMenu />
                    <Gap height={20} onPress={() => navigation.navigate('DetailRecipe')} />
                    <PopularMenu />
                    <Gap height={30} onPress={() => navigation.navigate('DetailRecipe')} />

                </View>
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
    content: {
        paddingLeft: 20
    }
})