import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/molecules/Header'
import { Button, Gap, Input } from '../../components/atoms'
import InputRecipes from '../../Storage/Action/Recipes/inputRecipes'
import ImageGallery from '../../components/atoms/gallery/gallery'
import { useNavigation } from '@react-navigation/native'

const EditRecipes = () => {


    return (
        <View style={styles.page}>
            <Header title={'Add Recipe'} />
            <TextInput style={styles.input} placeholder="Title" value={title} onChangeText={(value) => setTitle(value)} />
            <Gap height={20} />
            <TextInput style={styles.input} placeholder="Ingradients" value={ingredients} onChangeText={(value) => setIngredients(value)} />
            <Gap height={20} />
            <Picker style={styles.input} selectedValue={select} onValueChange={(item) => setSelect(item)}>
                <Picker.Item label="Dessert" value={1} />
                <Picker.Item label="Main Course" value={2} />
                <Picker.Item label="Drink" value={3} />
            </Picker>
            <Gap height={20} />
            {imageGallery === null &&
                <View style={styles}>
                    <ImageGallery setImageGallery={setImageGallery} />
                </View>}
            <Gap height={50} />
            <Button title={'POST'} onPress={handleSubmit} />
        </View>
    )
}

export default EditRecipes

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
        padding: 20
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#EFC81A',
        fontSize: 14,
        fontFamily: 'Poppins',
        height: 60,
        backgroundColor: '#F5F5F5',
        padding: 12
    },
})