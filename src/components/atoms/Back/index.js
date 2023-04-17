import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ICBack } from '../../../assets'

const Back = ({ onPress }) => {
    return (
        <View>

            <ICBack onPress={onPress} />
        </View>
    )
}

export default Back

const styles = StyleSheet.create({})