import { StyleSheet, ScrollView, View } from 'react-native'
import React from 'react'
import Header from '../../components/molecules/Header'
import { Button, Gap, Input, ProfileComponent } from '../../components'
import { ICRemovePhoto } from '../../assets'

const EditProfile = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header title={'Edit My Profile'} onPress={() => navigation.goBack()} />

                <View style={styles.header}>
                    <ProfileComponent />
                </View>
                <View style={styles.content}>
                    <Input label={'Name'} />
                    <Gap height={20} />
                    <Input label={'Email'} />
                    <Gap height={20} />
                    <Input label={'Phone'} />
                    <Gap height={40} />
                    <Button title={'Update Profile'} />
                </View>
            </ScrollView>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    content: {
        padding: 20
    },
    page: {
        backgroundColor: 'white',
        flex: 1
    },
    header: {

    }
})