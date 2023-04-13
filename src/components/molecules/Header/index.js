import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ICBack } from '../../../assets'
import { Gap } from '../../atoms'

const Header = ({ title, onPress }) => {
    const Icon = () => {
        if (title === 'Popular Menu') {
            return <ICBack />
        }
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Icon />
            </TouchableOpacity>
            <Text style={styles.text}>{title}</Text>
            <Gap width={24} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 30,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'Poppins-Medium',
        marginTop: 10,
        color: '#F1CD31'
    }
})