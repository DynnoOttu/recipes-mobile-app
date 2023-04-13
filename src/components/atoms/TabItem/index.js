import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { ICAdd, ICAddsActive, ICComment, ICHome, ICHomeActive, ICProfile, ICProfileActive } from '../../../assets/icons'

const TabItem = ({ title, active, onPress, onLongPress }) => {
    const Icon = () => {
        if (title === 'Home') {
            return active ? <ICHomeActive /> : <ICHome />
        } if (title === 'AddRecipes') {
            return active ? <ICAddsActive /> : <ICAdd />
        } if (title === 'Comment') {
            return <ICComment />
        } if (title === 'Profile') {
            return active ? <ICProfileActive /> : <ICProfile />
        }
        return <ICHome />
    }
    return (
        <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
            <Icon />
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({})