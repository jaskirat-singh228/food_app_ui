import { Dimensions, FlatList, Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SafeAreaViewComponent from '../../utills/SafeAreaViewComponent'
import CommonViewComponent from '../../utills/CommonViewComponent'
import TextComponent from '../../utills/TextComponent'
import { COLORS } from '../../utills/Colors'
import ImageComponent from '../../utills/ImageComponent'
import { IMAGES } from '../../utills/Images'
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native'
import CommonButtonsView from '../../utills/CommonButtonsView'
import { LISTS } from '../../utills/Lists'
import BackButtonHeader from '../../utills/BackButtonHeader'
import CommonButton from '../../utills/CommonButton'

const { height, width } = Dimensions.get('window')

const RestaurantDetails = () => {
    const navigation = useNavigation();
    const focus = useIsFocused();
    const route = useRoute();
    const restaurant = route.params?.restaurant;
    const offers = LISTS.offers;
    const prizing = LISTS.prizing;
    const ratingList = LISTS.ratingList;
    const deliverTime = LISTS.deliverTime;
    const categories = LISTS.categories
    const selectedCategoryList = LISTS.selectedCategoryList;
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [selectedId, setSelectedId] = useState(0);
    const [isFilterView, setIsFilterView] = useState(false);
    const [rating, setRating] = useState(0);
    

    useEffect(() => {
        console.log(selectedCategory);
    }, [selectedCategory, focus]);

    const renderSelectedCategoryList = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { product: item })} style={styles.selectedCategoryListView}>
                <View style={styles.selectedCategoryListImage} />
                <TextComponent text={item.name} style={styles.selectedCategoryListName} />
                <TextComponent text={item.place} style={styles.selectedCategoryListPlace} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextComponent text={`$${item.prize}`} style={styles.selectedCategoryListName} />
                    <ImageComponent source={IMAGES.PLUS} />
                </View>
            </TouchableOpacity>
        )
    }

    const selectedCategoryListHeader = () => {
        return (
            <>
                <View style={{ height: 265 }} />
                <View style={{ flexDirection: 'row', marginTop: Platform.OS == 'android' ? 35 : 0 }}>
                    <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                        <ImageComponent source={IMAGES.STAR} />
                        <TextComponent text={restaurant.star} style={styles.star} />
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 24, }}>
                        <ImageComponent source={IMAGES.HOME_DELIVERY} />
                        <TextComponent text={restaurant.delivery} style={styles.delivery} />
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 24 }}>
                        <ImageComponent source={IMAGES.CLOCK} />
                        <TextComponent text={restaurant.time} style={styles.delivery} />
                    </View>
                </View>
                <TextComponent text={restaurant.name} style={styles.name} />
                <TextComponent text={restaurant.subTitle} style={styles.subTitle} />
                <View style={{ marginVertical: 25 }}>
                    <CommonButtonsView listData={categories} isColumn={false} isCategory={true} onPressCategory={(category) => setSelectedCategory(category)} />
                </View>
                <TextComponent text={`${categories[selectedCategory-1]?.name} (${selectedCategoryList.length < 10 ? '0' : ''}${selectedCategoryList.length})`} style={styles.selectedCategoryText} />
            </>
        )
    }

    const renderPizing = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => setSelectedId(item.id)} style={[styles.prizing, {
                backgroundColor: selectedId == item?.id ? COLORS.RESTAURANT_CATEGORY_BG : null,
                borderColor: selectedId == item?.id ? COLORS.RESTAURANT_CATEGORY_BG : COLORS.CATEGORY_BR,
            }]}>
                <TextComponent text={item.name} style={{ color: COLORS.TITLE }} />
            </TouchableOpacity>
        )
    }

    const renderRating = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => setRating(index + 1)} style={styles.prizing}>
                <ImageComponent source={index < rating ? IMAGES.FILLED_STAR : IMAGES.UNFILLED_STAR} />
            </TouchableOpacity>
        )
    }

    const handleCancel = () => {
        setIsFilterView(false)
        setSelectedId(0)
        setRating(0)
    }

    return (
        <SafeAreaViewComponent children={
            <>
                {isFilterView &&
                    <View style={styles.filterView}>
                        <View style={styles.filterChildView}>
                            <View style={styles.filterTopView}>
                                <TextComponent text={'Filter your search'} style={styles.filterYourSearchText} />
                                <TouchableOpacity onPress={handleCancel}>
                                    <ImageComponent source={IMAGES.CANCEL} />
                                </TouchableOpacity>
                            </View>
                            <TextComponent text={'OFFERS'} style={styles.offers} />
                            <View style={{ marginVertical: 10, marginLeft: -10 }}>
                                <CommonButtonsView listData={offers} isColumn={true} numColumns={3} />
                            </View>
                            <TextComponent text={'DELIVER TIME'} style={styles.offers} />
                            <View style={{ marginTop: 10 }}>
                                <CommonButtonsView listData={deliverTime} isColumn={false} />
                            </View>
                            <TextComponent text={'PRIZING'} style={styles.offers} />
                            <View style={{ marginTop: 20 }}>
                                <FlatList
                                    data={prizing}
                                    horizontal
                                    keyExtractor={(item) => item?.id.toString()}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={renderPizing}
                                />
                            </View>
                            <TextComponent text={'RATING'} style={styles.offers} />
                            <View style={{ marginVertical: 20 }}>
                                <FlatList
                                    data={ratingList}
                                    horizontal
                                    keyExtractor={(index) => index.toString()}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={renderRating}
                                />
                            </View>
                            <CommonButton onPress={() => handleCancel()} title='FILTER' style={{ marginTop: 0 }} />
                        </View>
                    </View>
                }
                <BackButtonHeader isButton={true} isIcon={true} image={IMAGES.DOTS} onPress={() => setIsFilterView(true)} style={styles.topView} isProductDetails={true} />
                <View style={styles.image} />
                <CommonViewComponent children={
                    <FlatList
                        data={selectedCategoryList}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={selectedCategoryListHeader}
                        renderItem={renderSelectedCategoryList}
                        keyExtractor={(item) => item.id.toString()}
                    />
                } />
            </>
        } />

    )
}

export default RestaurantDetails

const styles = StyleSheet.create({
    topView: {
        marginTop: Platform.OS == 'android' ? 24 : 60,
        paddingHorizontal: 24,
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        height: 184,
        backgroundColor: COLORS.TEXTINPUT_BG,
        width: '100%',
        zIndex: 100,
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        padding: 24,
    },
    details: {
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22,
        paddingHorizontal: 15,
        color: COLORS.TITLE
    },
    image: {
        position: 'absolute',
        height: 321,
        width: '100%',
        backgroundColor: COLORS.COMMON_GRAY,
        borderBottomRightRadius: 32,
        borderBottomLeftRadius: 32,
        alignSelf: 'center',
        zIndex: 100,
        top: 0,
    },
    placeView: {
        height: 47,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start'
    },
    name: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 24.06,
        color: COLORS.TITLE,
    },
    subTitle: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 24,
        color: COLORS.PLACEHOLDER,
        marginTop: 10,
        width: 307
    },
    star: {
        marginTop: 4,
        paddingLeft: 8,
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 19.25,
        color: COLORS.TITLE,
        paddingRight: 35
    },
    delivery: {
        fontWeight: '400',
        marginTop: 0,
        fontSize: 14,
        lineHeight: 16.84,
        paddingHorizontal: 8,
        color: COLORS.TITLE,
        paddingRight: 35,
    },
    selectedCategoryText: {
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 24.06,
        color: COLORS.TITLE
    },
    selectedCategoryListView: {
        height: 174,
        width: 153,
        backgroundColor: COLORS.MAIN_BG,
        shadowColor: '#000',
        shadowOffset: { height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 25,
        margin: 10,
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    selectedCategoryListImage: {
        height: 75,
        width: 114,
        borderRadius: 15,
        backgroundColor: COLORS.COMMON_GRAY,
        alignSelf: 'center'
    },
    selectedCategoryListName: {
        fontSize: 15,
        fontWeight: '700',
        lineHeight: 18.05,
        color: COLORS.TITLE,
        marginTop: 5
    },
    selectedCategoryListPlace: {
        fontWeight: '400',
        fontSize: 13,
        color: COLORS.SUB_TITLE,
        lineHeight: 15.64,
        marginTop: 4
    },
    filterView: {
        backgroundColor: COLORS.FILTER_BG,
        alignSelf: 'center',
        height: height,
        width: width,
        position: 'absolute',
        zIndex: 900,
    },
    filterChildView: {
        backgroundColor: COLORS.MAIN_BG,
        alignSelf: 'center',
        width: '90%',
        position: 'absolute',
        zIndex: 1000,
        marginTop: 90,
        borderRadius: 12,
        padding: 25
    },
    filterTopView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    filterYourSearchText: {
        fontWeight: '400',
        fontSize: 17,
        lineHeight: 22,
        color: COLORS.TITLE
    },
    offers: {
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 15.64,
        color: COLORS.TITLE,
        marginTop: 20
    },
    prizing: {
        height: 48,
        width: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        borderColor: COLORS.CATEGORY_BR,
        borderWidth: 2,
        marginRight: 10
    }
})