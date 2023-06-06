import { StyleSheet, ScrollView, View, TouchableOpacity, Text, Alert, Image } from 'react-native'
import React from 'react'
import { MenuProfile, ProfileComponent } from '../../components/molecules'
import { LogoutUser } from '../../Storage/Action/Login/login';
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { Gap } from '../../components/atoms';

const Profile = () => {

    const isAuth = useSelector(state => state.Auth_Login);

    const photo = isAuth.data.photo;

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const logoutButtonAlert = () =>
        Alert.alert(
            'Logout',
            'are you sure you want to exit?',
            [
                {
                    text: 'No',
                    onPress: () => console.log('Cancel'),
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: () =>
                        dispatch(LogoutUser(navigation))
                },
            ],
        );

    return (

        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View style={styles.container}>
                        <Gap height={50} />
                        <View>
                            {photo === null ? (
                                <Image source={{ uri: 'https://res.cloudinary.com/dzs9aijqab/image/upload/v1685061397/recipes/q557xdengvkomz5vx44e.jpg' }} style={styles.avatar} />
                            ) : (
                                <Image source={{ uri: photo }} style={styles.avatar} />
                            )}
                        </View>
                        <Gap height={20} />
                        <Text style={styles.name}>{isAuth.data.fullname}</Text>
                        <Gap height={20} />
                    </View>
                </View>
                <View style={styles.menu}>
                    <MenuProfile name="Edit Profile" type="next" icon="Edit Profile" onPress={() => navigation.navigate('EditProfile')} />
                    <MenuProfile name="My Recipe" type="next" icon="My Recipe" onPress={() => navigation.navigate('MyRecipes')} />
                    <MenuProfile name="Saved Recipe" type="next" icon="Saved Recipe" />
                    <MenuProfile name="Liked Recipe" type="next" icon="Liked Recipe" />
                    <TouchableOpacity onPress={() => logoutButtonAlert()}>
                        <Text style={styles.logout}>Logout</Text>
                    </TouchableOpacity>
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
    },
    avatar: {
        width: 120, height: 120, borderRadius: 120 / 2
    },
    container: {
        justifyContent: 'center', alignItems: 'center',
    },
    name: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        color: 'white'
    },
    logout: {
        fontSize: 20, fontFamily: 'Poppins-Medium', marginLeft: 25, color: '#EFC81A'
    }
})