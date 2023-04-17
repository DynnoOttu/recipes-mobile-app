import { StyleSheet, ScrollView, View } from 'react-native'
import React from 'react'
import { MenuProfile, ProfileComponent } from '../../components/molecules'

const Profile = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <ProfileComponent nameUser="Dummy User" />
                </View>
                <View style={styles.menu}>
                    <MenuProfile name="Edit Profile" type="next" icon="Edit Profile" onPress={() => navigation.navigate('EditProfile')} />
                    <MenuProfile name="My Recipe" type="next" icon="My Recipe" />
                    <MenuProfile name="Saved Recipe" type="next" icon="Saved Recipe" />
                    <MenuProfile name="Liked Recipe" type="next" icon="Liked Recipe" />
                </View>

            </ScrollView>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1
    },
    header: {
        backgroundColor: '#EEC302',
        flex: 1,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    menu: {
        padding: 20,
    }
})