import {  FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SafeAreaViewComponent from '../../utills/SafeAreaViewComponent'
import CommonViewComponent from '../../utills/CommonViewComponent'
import ImageComponent from '../../utills/ImageComponent'
import TextComponent from '../../utills/TextComponent'
import { COLORS } from '../../utills/Colors'
import CommonText from './components/CommonText'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { IMAGES } from '../../utills/Images'
import { LISTS } from '../../utills/Lists'
import OfferComponent from './components/OfferComponent'

const HomeScreen = () => {
    const navigation = useNavigation();
    const focus = useIsFocused();
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        console.log(selectedCategory);
    }, [selectedCategory, focus]);

    const homeCategories = LISTS.homeCategories
    const homeRestaurants = LISTS.homeRestaurants

    const renderHomeRestaurantsHeader = () => {
        return (
            <>
                <View style={styles.main}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <ImageComponent source={IMAGES.MENU} />
                        </TouchableOpacity>
                        <View style={styles.deliverView}>
                            <TextComponent text='DELIVER TO' style={styles.deliverTo} />
                            <TouchableOpacity style={styles.halalButton}>
                                <TextComponent text='Halal Lab office' style={styles.halalLabOffice} />
                                <ImageComponent source={IMAGES.DOWN_ARROW} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('MyCart')} >
                        <ImageComponent source={IMAGES.CART} />
                    </TouchableOpacity>
                </View>
                <View style={styles.halalTextView}>
                    <TextComponent text={'Hay Halal,'} style={styles.halalText} />
                    <TextComponent text={'Good Afternoon!'} style={styles.goodAfternoon} />
                </View>
                <View style={styles.searchView}>
                    <TouchableOpacity style={styles.searchButton} >
                        <ImageComponent source={IMAGES.SEARCH} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('SearchScreen', { homeCategories: homeCategories, suggestedRestaurant: homeRestaurants })} style={[styles.textInputTextView, { width: '85%' }]}>
                        <TextComponent text={'Search dishes, restaurants'} style={styles.textInputText} />
                    </TouchableOpacity>
                </View>
                <CommonText title={'All Categories'} />
                <FlatList
                    style={styles.categoryList}
                    data={homeCategories}
                    renderItem={renderHomeCategories}
                    keyExtractor={(item) => item?.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                <CommonText title={'Open Restaurants'} />
            </>
        )
    }

    const renderHomeRestaurants = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetails', { restaurant: item, categories: homeCategories })} style={styles.restaurantButton}>
                <View style={{ height: 137, width: '100%', backgroundColor: COLORS.COMMON_GRAY, borderRadius: 10 }}>
                </View>
                <TextComponent text={item.name} style={styles.restaurantName} />
                <TextComponent text={item.food} style={styles.restaurantFood} />
                <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
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

    const hanldeCategoryButtons = (item) => {
        setSelectedCategory(item?.name),
            navigation.navigate('CategoryDetails', { category: item, homeRestaurants: homeRestaurants, homeCategories: homeCategories })
    }

    const renderHomeCategories = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => hanldeCategoryButtons(item)} style={[styles.categoryButton, { marginLeft: index == 0 ? 0 : 15, backgroundColor: selectedCategory == item.name ? COLORS.CATEGORY_BG : COLORS.MAIN_BG }]}>
                <View style={styles.categoryImage} />
                <TextComponent text={item.name} style={styles.categoryName} />
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaViewComponent children={
            <CommonViewComponent children={
                <>
                    <OfferComponent />
                    <FlatList
                        style={{ height: 80, width: '100%' }}
                        data={homeRestaurants}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={renderHomeRestaurantsHeader}
                        renderItem={renderHomeRestaurants}
                        keyExtractor={(item) => item?.id.toString()}
                    />
                </>
            } />
        } />
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    main: {
        height: 49,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    deliverView: {
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    deliverTo: {
        color: COLORS.ACTIVE_INDICATOR,
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 14.44
    },
    halalButton: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    halalLabOffice: {
        fontSize: '400',
        fontSize: 14,
        lineHeight: 16.84,
        color: COLORS.HALAL_LAB_OFFICE,
        paddingRight: 10
    },
    halalTextView: {
        flexDirection: 'row',
        marginTop: 20
    },
    halalText: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 26,
        color: COLORS.TITLE
    },
    goodAfternoon: {
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 26,
        color: COLORS.TITLE
    },
    textInputTextView: {
        backgroundColor: COLORS.HOME_TEXTINPUT,
        height: 62,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center'
    },
    textInputText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16.84,
        color: COLORS.HALAL_LAB_OFFICE,
    },
    searchView: {
        flexDirection: 'row',
        backgroundColor: COLORS.HOME_TEXTINPUT,
        width: '100%',
        height: 62,
        borderRadius: 10,
        marginVertical: 20,
    },
    searchButton: {
        width: '15%',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: 'center',
    },
    categoryList: {
        height: 80,
        width: '100%'
    },
    categoryButton: {
        height: 62,
        borderRadius: 39,
        backgroundColor: COLORS.MAIN_BG,
        shadowColor: '#000',
        shadowOffset: { height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 5,
        elevation: 5,
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 6,
        paddingRight: 12
    },
    categoryImage: {
        backgroundColor: COLORS.COMMON_GRAY,
        height: 44,
        width: 44,
        borderRadius: 23,
    },
    categoryName: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 16.84,
        color: COLORS.TITLE,
        paddingLeft: 12
    },
    restaurantButton: {
        height: 225,
        marginBottom: 40
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