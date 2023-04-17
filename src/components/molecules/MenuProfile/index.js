import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ICEditProfile, ICMyRecipe, ICSaveProfile, ICLikeProfile, ICNext, } from '../../../assets'

const MenuProfile = ({ profile, name, desc, type, onPress, icon }) => {
    const Icon = () => {
        if (icon === 'Edit Profile') {
            return <ICEditProfile />
        } if (icon === 'My Recipe') {
            return <ICMyRecipe />
        } if (icon === 'Saved Recipe') {
            return <ICSaveProfile />
        } if (icon === 'Liked Recipe') {
            return <ICLikeProfile />
        }
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon ? <Icon /> : <Image source={profile} style={styles.avatar} />}

            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
            </View>
            {
                type === 'next' && <ICNext />
            }
        </TouchableOpacity>
    )
}

export default MenuProfile

const styles = StyleSheet.create({
    avatar: { width: 46, height: 46, borderRadius: 46 / 2, },
    container: { flexDirection: 'row', padding: 16, alignItems: 'center', justifyContent: 'space-between' },
    name: { fontSize: 20, fontFamily: 'Poppins-Medium', },
    content: { flex: 1, marginLeft: 16 }
})