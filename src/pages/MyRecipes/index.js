import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native'
import Header from '../../components/molecules/Header'
import { ImgChikenSteak, ImgDessert, ImgSeafood, ImgSpaghetti } from '../../assets/ilustration'
import { Button, Gap } from '../../components/atoms'
import { useNavigation } from '@react-navigation/native'
import MyRecipesAction from '../../Storage/Action/Recipes/myRecipes'
import DetailRecipes from '../../Storage/Action/Recipes/detailRecipes'


const MyRecipes = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation()
    const data = useSelector(state => state.MyRecipeReducers.data)

    const token = useSelector(state => state.Auth_Login.data)

    useEffect(() => {
        dispatch(MyRecipesAction(token.token))
    }, [dispatch])


    const handlePress = (id) => {
        dispatch(DetailRecipes(id))
        navigation.navigate('EditRecipes', { id: id })
    }

    const showAlert = (id) => {
        Alert.alert(
            'Delete item',
            'Are you sure want to delete this item?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    onPress: () =>
                        dispatch(DeleteRecipesAction(id, token.token),
                        )
                }
            ],
            { cancelable: true }
        );
    };

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        dispatch(MyRecipesAction(token.token)).then(() => setRefreshing(false))
    }, []);

    return (
        !token ? navigation.navigate('Login')
            :
            <View style={styles.page}>
                <Header title={'My Recipes'} onPress={() => navigation.goBack()} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    {data?.map((item) => {
                        return (
                            <View style={styles.content} key={item.id}>
                                <Image source={{ uri: `${item.photo}` }} style={styles.image} />
                                <View style={styles.details}>
                                    <Text style={styles.menu}>{item.title}</Text>
                                    <Gap height={10} />
                                    <Text style={styles.category}>{item.category}</Text>
                                </View>
                                <View style={styles.action}>
                                    <TouchableOpacity onPress={() => handlePress(item.id)}>
                                        <Text style={styles.edit}>Edit</Text>
                                    </TouchableOpacity>
                                    <Gap height={10} />
                                    <TouchableOpacity>
                                        <Text style={styles.hapus}>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>

            </View>
    )
}

export default MyRecipes

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 10
    },
    content: {
        marginTop: 15,
        flexDirection: 'row',
        paddingLeft: 20,
    },
    details: {
        marginLeft: 20,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    Icon: {
        flexDirection: 'row',
        marginLeft: 30,
        alignItems: 'center'
    },
    saveOn: {
        marginRight: 10
    },
    menu: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        color: '#18172B'
    },
    category: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        color: '#18172B'
    },
    name: {
        fontFamily: 'Poppins-Black',
        color: '#6E80B0',
        fontSize: 18
    },
    action: {
        marginLeft: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    edit: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        backgroundColor: '#30C0F3',
        color: 'white',
        width: 70,
        alignItems: 'center',
        paddingLeft: 22,
        paddingTop: 5,
        borderRadius: 5,
        marginLeft: -20
    },
    hapus: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        backgroundColor: '#F57E71',
        color: 'white',
        width: 70,
        alignItems: 'center',
        paddingLeft: 11,
        paddingTop: 5,
        borderRadius: 5,
        marginLeft: -20
    }

})