import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import CommonViewComponent from '../../utills/CommonViewComponent';
import SafeAreaViewComponent from '../../utills/SafeAreaViewComponent';
import BackButton from '../../utills/BackButton';
import TextComponent from '../../utills/TextComponent';
import { COLORS } from '../../utills/Colors';
import ImageComponent from '../../utills/ImageComponent';
import { IMAGES } from '../../utills/Images';
import CommonText from '../../utills/CommonText';
import { LISTS } from '../../utills/Lists';

const CategoryDetails = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const category = route.params?.category;
    const restaurants = route.params?.homeRestaurants;
    const categories = route.params?.homeCategories;

    const popular = LISTS.popular;

    const renderRestaurantsHeader = () => {
        return (
            <>
                <View style={styles.topView}>
                    <View style={styles.topChildView}>
                        <BackButton />
                        <TouchableOpacity style={styles.categoryButtons}>
                            <TextComponent style={styles.categoryText} text={category.name.toUpperCase()} />
                            <ImageComponent source={IMAGES.DOWN_ARROW} style={{ tintColor: COLORS.ACTIVE_INDICATOR, marginLeft: 10 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.topChildView, { justifyContent: 'flex-end' }]}>
                        <ImageComponent source={IMAGES.CATEGORY_SEARCH} style={{ marginHorizontal: 10 }} />
                        <ImageComponent source={IMAGES.FILTER} />
                    </View>
                </View>
                <CommonText title={`Popular ${category.name}s`} style={styles.popular} />
                <View style={{ height: 400 }}>
                    <FlatList
                        data={popular}
                        numColumns={2}
                        keyExtractor={( item ) => item?.id.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { product: item })} style={[styles.fastFoodView, { marginTop: index !== 0 && index !== 1 ? 65 : 25 }]}>
                                    <View style={styles.fastFoodImage} />
                                    <View style={styles.imageBottomView}>
                                        <TextComponent text={item.name} style={styles.foodName} />
                                        <TextComponent text={item.place} style={styles.foodPlace} />
                                        <View style={styles.prizeView}>
                                            <TextComponent text={item.prize} style={styles.prize} />
                                            <ImageComponent source={IMAGES.PLUS} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
                <CommonText title={`Open Resturants`} style={[styles.popular, { marginBottom: 10 }]} />
            </>
        )
    }

    const renderRestaurants = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetails', { restaurant: item, categories: categories })} style={styles.restaurantButton}>
                <View style={{ height: 137, width: '100%', backgroundColor: COLORS.COMMON_GRAY, borderRadius: 10 }}>
                </View>
                <TextComponent text={item.name} style={styles.restaurantName} />
                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', height: 20 }}>
                        <ImageComponent source={IMAGES.STAR} />
                        <TextComponent text={item.star} style={[styles.starText, { fontWeight: '700' }]} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
                        <ImageComponent source={IMAGES.HOME_DELIVERY} />
                        <TextComponent text={item.delivery} style={styles.starText} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', height: 20 }}>
                        <ImageComponent source={IMAGES.CLOCK} />
                        <TextComponent text={item.time} style={styles.starText} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaViewComponent children={
            <CommonViewComponent children={
                <>
                    <FlatList
                        style={{ height: 80, width: '100%' }}
                        data={restaurants}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={renderRestaurantsHeader}
                        renderItem={renderRestaurants}
                        keyExtractor={item => item.id.toString()}
                    />
                </>
            } />
        } />
    )
}

export default CategoryDetails

const styles = StyleSheet.create({
    topView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    topChildView: {
        width: '50%',
        height: 46,
        flexDirection: 'row',
    },
    categoryButtons: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 33,
        borderWidth: 1,
        borderColor: COLORS.CATEGORY_BR,
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    categoryText: {
        fontSize: 12,
        fontWeight: '700',
        color: COLORS.TITLE,
        lineHeight: 14.44
    },
    popular: {
        marginTop: 20,
        marginBottom: 15,
        color:COLORS.TITLE
    },
    fastFoodView: {
        height: 144,
        width: 154,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 80,
        marginLeft: 20
    },
    fastFoodImage: {
        backgroundColor: COLORS.COMMON_GRAY,
        height: 84,
        width: 122,
        borderRadius: 15,
        zIndex: 1000
    },
    imageBottomView: {
        height: 130,
        width: 153,
        borderRadius: 24,
        backgroundColor: COLORS.MAIN_BG,
        shadowColor: '#000',
        shadowOffset: { height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 5,
        elevation: 5,
        marginTop: -30,
        justifyContent: 'center',
        padding: 12
    },
    foodName: {
        fontSize: 15,
        fontWeight: '700',
        lineHeight: 18.05,
        color: COLORS.TITLE,
        marginTop: 40
    },
    foodPlace: {
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 15.64,
        color: COLORS.SUB_TITLE,
        marginVertical: 5
    },
    prizeView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        alignItems: 'center'
    },
    prize: {
        fontWeight: '700',
        fontSize: 16,
        color: COLORS.TITLE
    },
    restaurantButton: {
        height: 225,
        marginBottom: 30
    },
    restaurantName: {
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 24.06,
        color: COLORS.TITLE,
        paddingTop: 8
    },
    restaurantFood: {
        color: COLORS.PLACEHOLDER,
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16.84,
        paddingTop: 5
    },
    starText: {
        marginTop: 4,
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 16.84,
        marginLeft: 5,
        color: COLORS.TITLE
    }
})