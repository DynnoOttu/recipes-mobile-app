import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TextInput, Image, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import Header from '../../components/molecules/Header'
import { Button, Gap } from '../../components/atoms'
import ImageGallery from '../../components/atoms/gallery/gallery'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native'
import DetailRecipes from '../../Storage/Action/Recipes/detailRecipes'
import EditRecipesAction from '../../Storage/Action/Recipes/editRecipes'
import MyRecipesAction from '../../Storage/Action/Recipes/myRecipes'

const EditRecipes = () => {

    const dispatch = useDispatch()
    const route = useRoute()
    const navigation = useNavigation()
    const item = route.params.id

    const [select, setSelect] = useState()
    const [imageGallery, setImageGallery] = useState(null)
    const [title, setTitle] = useState('')
    const [ingredients, setIngredients] = useState('')
    const data = useSelector(state => state.DetailReducers.data)
    const token = useSelector(state => state.Auth_Login.data.token)


    useEffect(() => {
        dispatch(DetailRecipes(item))
    }, [])


    const handleSubmit = () => {
        const inputForm = new FormData()
        inputForm.append('title', title)
        inputForm.append('ingredients', ingredients)
        inputForm.append('category', select)
        inputForm.append('photo',
            {
                uri: imageGallery.uri,
                type: imageGallery.type,
                name: imageGallery.fileName,
            })
        dispatch(EditRecipesAction(item, token, inputForm, navigation))
    }


    return (
        <View style={styles.page}>
            <Header title={'Edit Recipes'} onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                {data.map(item => (
                    <View key={item.id}>
                        {imageGallery === null ?
                            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                                <Image style={{ width: 150, height: 150 }} source={{ uri: item.photo }} />
                            </View> : <View style={{ alignItems: 'center', marginBottom: 20 }}>
                                <Image style={{ width: 150, height: 150 }} source={{ uri: imageGallery.uri }} />
                            </View>}
                        <ImageGallery setImageGallery={setImageGallery} />
                        <Gap height={20} />
                        <TextInput style={styles.input} placeholder={item.title} placeholderTextColor='black' autoComplete='off' value={title} onChangeText={(value) => setTitle(value)} />
                        <Gap height={20} />
                        <TextInput style={styles.inputIngredients} placeholder={item.ingredients} autoComplete='off' value={ingredients} onChangeText={(value) => setIngredients(value)} />
                        <Gap height={20} />
                        <Picker style={styles.input} selectedValue={select} onValueChange={(pick) => setSelect(pick)}>
                            <Picker.Item label="Dessert" value={1} />
                        </Picker>
                        <Gap height={50} />
                        <Button title={'POST'} onPress={handleSubmit} />
                    </View>
                ))}
            </ScrollView>
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
    inputIngredients: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#EFC81A',
        fontSize: 14,
        fontFamily: 'Poppins',
        height: 60,
        backgroundColor: '#F5F5F5',
        padding: 12,
        height: 300
    }
})