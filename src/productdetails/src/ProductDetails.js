import { FlatList, Platform, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SafeAreaViewComponent from '../../utills/SafeAreaViewComponent'
import CommonViewComponent from '../../utills/CommonViewComponent'
import TextComponent from '../../utills/TextComponent'
import { COLORS } from '../../utills/Colors'
import ImageComponent from '../../utills/ImageComponent'
import { IMAGES } from '../../utills/Images'
import { useRoute } from '@react-navigation/native'
import { LISTS } from '../../utills/Lists'
import BackButtonHeader from '../../utills/BackButtonHeader'
import CommonButton from '../../utills/CommonButton'

const ProductDetails = () => {
    const route = useRoute();
    const product = route.params?.product;
    const [isSelected, setIseSeleced] = useState();
    const [selectedCategory, setSelectedCategory] = useState('');
    const size = LISTS.size;

    const renderSize = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => setSelectedCategory(item.name)} style={[styles.sizeCircle, {
                backgroundColor: selectedCategory == item?.name ? COLORS.RESTAURANT_CATEGORY_BG : null,
                borderColor: selectedCategory == item?.name ? COLORS.RESTAURANT_CATEGORY_BG : COLORS.CATEGORY_BR,
            }]}>
                <TextComponent text={item.name} style={styles} />
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaViewComponent children={
            <>
                <BackButtonHeader isButton={true} isIcon={true} image={IMAGES.SAVE} onPress={() => setIseSeleced(!isSelected)} style={styles.topView} />
                <View style={styles.image} />
                <View style={styles.bottomView}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TextComponent text={`${product.prize}`} style={styles.prize} />
                        <View style={styles.addProductView}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 3 }}>
                                <ImageComponent source={IMAGES.REMOVE} />
                                <TextComponent text={2} style={[styles.star, { color: COLORS.MAIN_BG, alignSelf: 'center', paddingLeft: 0, marginTop: 0, paddingRight: 0 }]} />
                                <ImageComponent source={IMAGES.ADD} />
                            </View>
                        </View>
                    </View>
                    <CommonButton title='ADD TO CART' style={{ marginTop: 20 }} />
                </View>
                <CommonViewComponent children={
                    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                        <View style={{ height: 265 }} />
                        <TextComponent text={product.name} style={styles.name} />
                        <View style={styles.placeView}>
                            <ImageComponent source={IMAGES.RESTAURANT_LOGO} />
                            <TextComponent text={product.place} style={{ marginLeft: 15, color: COLORS.TITLE }} />
                        </View>
                        <TextComponent text={product.subTitle} style={styles.subTitle} />
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                                <ImageComponent source={IMAGES.STAR} />
                                <TextComponent text={product.star} style={styles.star} />
                            </View>
                            <View style={{ flexDirection: 'row', marginVertical: 24, }}>
                                <ImageComponent source={IMAGES.HOME_DELIVERY} />
                                <TextComponent text={product.delivery} style={styles.delivery} />
                            </View>
                            <View style={{ flexDirection: 'row', marginVertical: 24 }}>
                                <ImageComponent source={IMAGES.CLOCK} />
                                <TextComponent text={product.time} style={styles.delivery} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
                            <TextComponent text={'SIZE:'} style={styles.size} />
                            <FlatList
                                data={size}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                renderItem={renderSize}
                            />
                        </View>
                        <TextComponent text={'INTEGRATES'} style={[styles.size, { marginVertical: 20 }]} />
                        <View style={{ flexDirection: 'row', marginBottom: Platform.OS=='android'?170:160, justifyContent: 'space-between' }}>
                            <ImageComponent source={IMAGES.SALT} />
                            <ImageComponent source={IMAGES.CHICKEN} />
                            <ImageComponent source={IMAGES.ONION} />
                            <ImageComponent source={IMAGES.GARLIC} />
                            <ImageComponent source={IMAGES.PAPPERS} />
                        </View>
                    </ScrollView>
                } />
            </>
        } />

    )
}

export default ProductDetails

const styles = StyleSheet.create({
    topView: {
        marginTop: Platform.OS == 'android' ? 24 : 60,
        paddingHorizontal: 24
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        height: 188,
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
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
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
        marginTop: Platform.OS == 'android' ? 80 : 25
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
    size: {
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 15.64,
        color: COLORS.TITLE
    },
    sizeCircle: {
        height: 48,
        width: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        borderColor: COLORS.CATEGORY_BR,
        borderWidth: 2,
        marginLeft: 12
    },
    prize: {
        fontSize: 28,
        fontWeight: '400',
        lineHeight: 33.69,
        color: COLORS.TITLE
    },
    addProductView: {
        height: 48,
        backgroundColor: COLORS.ADD_PRODUCT,
        width: 125,
        borderRadius: 50,
        padding: 10,
        justifyContent: 'center'
    },
})