import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/molecules/Header'
import { Button, Gap, Input } from '../../components/atoms'

const AddRecipes = () => {
    return (
        <View style={styles.page}>
            <Header title={'Add Recipe'} />
            <Input label={'Title'} />
            <Gap height={20} />
            <Input label={'Ingredients'} />
            <Gap height={20} />
            <Input label={'Add Photo'} />
            <Gap height={20} />
            <Input label={'Category'} />
            <Gap height={50} />
            <Button title={'POST'} />
        </View>
    )
}

export default AddRecipes

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
        padding: 20
    }
})