import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ButtomSearch, Gap } from '../../components/atoms'
import PopularRecipes from '../../components/molecules/PopularRecipes'
import CategoryRecipes from '../../components/molecules/CategoryRecipes'
import PopularForYou from '../../components/molecules/PopularForYou'

const Home = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ButtomSearch onPress={() => navigation.navigate('Search')} title={'Search Pasta, Bread, etc'} />
                    <Gap height={10} />
                    <Text style={styles.recipes}>Popular Recipes</Text>
                    <Text style={styles.check}>Populer Check</Text>
                    <Gap height={20} />
                    <View style={styles.wrapperScroll}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.popularRecipes}>
                                <Gap width={16} />
                                <PopularRecipes title={'Chiken Steak'} />
                                <PopularRecipes title={'Spaghetti'} />
                                <PopularRecipes title={'Ice Craem'} />
                                <PopularRecipes />
                                <Gap width={6} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.listCategory}>
                        <Text style={styles.new}>New Recipes</Text>
                        <Text style={styles.info}>More Info</Text>
                    </View>
                    <Gap height={10} />
                    <View style={styles.category}>
                        <CategoryRecipes title={'Soup'} />
                        <CategoryRecipes title={'Chiken'} />
                        <CategoryRecipes title={'Seafood'} />
                        <CategoryRecipes title={'Deassert'} />
                    </View>
                    <Gap height={10} />
                    <Text style={styles.popularText}>Popular For You</Text>
                    <Gap height={10} />
                    <View style={styles.wrapperPopular} >
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                            <PopularForYou title={'Chiken Steak'} detail={'Best quality chicken steak'} onPress={() => navigation.navigate('PopularMenu')} />
                            <PopularForYou title={'Pizza'} detail={'very good pizza taste'} onPress={() => navigation.navigate('PopularMenu')} />
                            <PopularForYou title={'Seafood'} detail={'fresh seafood and delicious to eat'} onPress={() => navigation.navigate('PopularMenu')} />
                            <PopularForYou title={'Juice'} detail={'fresh juice with many variant of fruit'} onPress={() => navigation.navigate('PopularMenu')} />
                        </ScrollView>
                    </View>
                    <Gap height={25} />
                </ScrollView>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
        padding: 12,
    },
    recipes: {
        fontSize: 22,
        color: '#3F3A3A',
        fontFamily: 'Poppins',
    },
    check: {
        fontSize: 18,
        color: '#666666',
        fontFamily: 'Poppins-SemiBold',
        marginTop: 5
    },
    popularRecipes: {
        flexDirection: 'row'

    },
    wrapperScroll: {
        marginHorizontal: -16,
        height: 230,
    },
    listCategory: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    new: {
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        color: '#3F3A3A',
    },
    info: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#6D61F2',
        paddingRight: 28
    },
    category: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    wrapperPopular: {
        flexDirection: 'row',
        marginHorizontal: 6,
        height: 220,
    },
    popularText: {
        marginHorizontal: 10,
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        color: '#3F3A3A'
    }
})