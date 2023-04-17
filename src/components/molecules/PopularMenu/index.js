import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ICLike, ICSaveOn, dChikenSteak } from '../../../assets'

const PopularMenu = ({ onPress }) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.content}>
                    <Image source={dChikenSteak} style={styles.image} />
                    <View style={styles.details}>
                        <Text style={styles.menu}>Name Menu</Text>
                        <Text style={styles.category}>Deassert</Text>
                        <Text style={styles.name}>Person Name</Text>
                    </View>
                    <View style={styles.Icon}>
                        <ICSaveOn style={styles.saveOn} />
                        <ICLike style={styles.like} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default PopularMenu

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100,
        borderRadius: 10
    },
    content: {
        flexDirection: 'row'
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
    }

})