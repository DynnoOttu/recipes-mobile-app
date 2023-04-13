import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Input from '../Input'
import Gap from '../Gap'

const ButtomSearch = ({ onPress, title }) => {
    return (
        <TouchableOpacity style={styles.page} onPress={onPress}>
            <Gap height={20} />
            <Text style={styles.textInput}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtomSearch

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

})