import { FlatList, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SafeAreaViewComponent from '../utills/SafeAreaViewComponent'
import CommonViewComponent from '../utills/CommonViewComponent'
import TextComponent from '../utills/TextComponent'
import { COLORS } from '../utills/Colors'
import ImageComponent from '../utills/ImageComponent'
import { useNavigation, useRoute } from '@react-navigation/native'
import BackButton from '../utills/BackButton'
import { IMAGES } from '../utills/Images'
import CommonText from '../utills/CommonText'
import { LISTS } from '../utills/Lists'
import CommonButtonsView from '../utills/CommonButtonsView'
import BackButtonHeader from '../utills/BackButtonHeader'

const SearchScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const categories = LISTS.categories;
    const suggestedRestaurant = route.params?.suggestedRestaurant;
    const popularFastFood = LISTS.popular;

    const popularFastFoodHeader = () => {
        return (
            <>
                <BackButtonHeader title={'Search'} isButton={true} isIcon={true} image={IMAGES.CART} onPress={()=>navigation.navigate('MyCart')} />
                <View style={styles.searchView}>
                    <TouchableOpacity style={styles.searchButton} >
                        <ImageComponent source={IMAGES.SEARCH} />
                    </TouchableOpacity>
                    <TextInput
                        placeholder={'Search dishes, restaurants'}
                        placeholderTextColor={COLORS.HALAL_LAB_OFFICE}
                        clearButtonMode
                        style={[styles.textInput, { width: '83%' }]} />
                </View>
                <CommonText title={'Recent Keywords'} />
                <View style={{ marginBottom: 20 }}>
                    <CommonButtonsView listData={categories} isColumn={false} />
                </View>
                <CommonText title={'Suggested Restaurants'} />
                <View style={{ height: 250 }}>
                    <FlatList
                        data={suggestedRestaurant.slice(0, 3)}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={styles.suggestedListView}>
                                    <View style={styles.image} />
                                    <View style={{ paddingHorizontal: 10, justifyContent: 'center', height: 50 }}>
                                        <TextComponent text={item.name} style={{ fontWeight: '400', fontSize: 16, lineHeight: 19.25, color: COLORS.TITLE }} />
                                        <View style={{ flexDirection: 'row' }}>
                                            <ImageComponent source={IMAGES.STAR} style={{ height: 18, width: 18 }} />
                                            <TextComponent text={item.star} style={{ fontWeight: '400', fontSize: 16, lineHeight: 19.25, color: COLORS.TITLE, paddingHorizontal: 5 }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
                <CommonText title={'Popular Fast Food'} />
            </>
        )
    }

    return (
        <SafeAreaViewComponent children={
            <CommonViewComponent children={
                <>
                    <FlatList
                        data={popularFastFood}
                        numColumns={2}
                        keyExtractor={( item ) => item?.id.toString()}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={popularFastFoodHeader}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { product: item })} style={styles.fastFoodView}>
                                    <View style={styles.fastFoodImage} />
                                    <View style={styles.imageBottomView}>
                                        <TextComponent text={item.name} style={styles.fastFoodName} />
                                        <TextComponent text={item.place} style={styles.fastFoodPlace} />
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </>
            } />
        } />
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    search: {
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22,
        paddingHorizontal: 15,
        color: COLORS.TITLE
    },
    searchView: {
        flexDirection: 'row',
        backgroundColor: COLORS.HOME_TEXTINPUT,
        width: '100%',
        height: 62,
        borderRadius: 10,
        marginVertical: 20,
        marginTop:70
    },
    searchButton: {
        width: '15%',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: 'center',
    },
    textInput: {
        backgroundColor: COLORS.HOME_TEXTINPUT,
        height: 62,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        fontSize: 16
    },
    recent: {
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 24.06,
        paddingVertical: 10
    },
    categoryButtons: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 33,
        borderWidth: 2,
        borderColor: COLORS.CATEGORY_BR,
        marginLeft: 10
    },
    categoryText: {
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.TITLE,
        lineHeight: 19.25
    },
    suggestedListView: {
        height: 64,
        marginTop: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.BORDER_BOTTOM_COLOR
    },
    image: {
        height: 50,
        width: 60,
        borderRadius: 10,
        backgroundColor: COLORS.COMMON_GRAY
    },
    fastFoodView: {
        height: 144,
        width: 154,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
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
        height: 102.05,
        width: 153,
        borderRadius: 24,
        backgroundColor: COLORS.MAIN_BG,
        shadowColor: '#000',
        shadowOffset: { height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 5,
        elevation: 5,
        marginTop: -45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fastFoodName: {
        fontSize: 15,
        fontWeight: '700',
        lineHeight: 18.05,
        color: COLORS.TITLE,
        marginTop: 35
    },
    fastFoodPlace: {
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 15.64,
        color: COLORS.TITLE,
        color: COLORS.SUB_TITLE
    }
})