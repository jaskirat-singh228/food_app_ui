import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SafeAreaViewComponent from '../../utills/SafeAreaViewComponent'
import CommonViewComponent from '../../utills/CommonViewComponent'
import BackButtonHeader from '../../utills/BackButtonHeader'
import { COLORS } from '../../utills/Colors'
import ImageComponent from '../../utills/ImageComponent'
import { IMAGES } from '../../utills/Images'
import TextComponent from '../../utills/TextComponent'
import { useRoute } from '@react-navigation/native'
import { LISTS } from '../../utills/Lists'

const ChefProductDetails = () => {
    const route = useRoute();
    const item = route.params?.item;
    const interidents = LISTS.interidents;

    const renderList = ({ item }) => {
        return (
            <TouchableOpacity>
            <ImageComponent source={item?.image} style={{marginRight:23,marginVertical:10}} />
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaViewComponent children={
            <CommonViewComponent children={
                <>
                    <BackButtonHeader title={'Food Details'} isButton={true} buttonTitle={'EDIT'} buttonTitleText={{ textDecorationLine: 'none' }} />
                    <View style={styles.imageView}>
                        <ImageComponent source={IMAGES.CHEF_BREAKFAST_BUTTON} style={styles.breakfastButton} />
                        <ImageComponent source={IMAGES.CHEF_DELIVERY_BUTTON} style={[styles.breakfastButton, { right: 0 }]} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                        <TextComponent text={item.name} style={styles.itemName} />
                        <TextComponent text={item.prize} style={styles.itemName} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <ImageComponent source={IMAGES.CHEF_PRODUCT_LOCATION} style={{ alignSelf: 'flex-end' }} />
                            <TextComponent text={item.location} style={[styles.reviews, { fontSize: 13 }]} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <ImageComponent source={IMAGES.CHEF_REVIEW_STAR} style={{ height: 20, width: 20 }} />
                            <TextComponent text={item.rating} style={[styles.itemName, { color: COLORS.ACTIVE_INDICATOR, fontSize: 14 }]} />
                            <TextComponent text={item.reviews} style={styles.reviews} />
                        </View>
                    </View>
                    <View style={styles.lineView} />
                    <TextComponent text={'INTEGRIDENTS'} style={styles.itemNameText} />
                    <View style={{marginTop:10}}>
                    <FlatList
                        data={interidents}
                        renderItem={renderList}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={5}
                        scrollEnabled={false}
                    />
                    </View>
                    <View style={[styles.lineView,{marginTop:10}]} />
                    <TextComponent text={'Description'} style={styles.itemNameText} />
                    <TextComponent text={'Lorem ipsum dolor sit amet, consetdur Maton adipiscing elit. Bibendum in vel, mattis et amet dui mauris turpis.'} style={styles.addText} />
                </>
            } />
        } />
    )
}

export default ChefProductDetails

const styles = StyleSheet.create({
    imageView: {
        height: 210,
        width: '100%',
        borderRadius: 20,
        backgroundColor: COLORS.COMMON_GRAY,
        marginTop: 80,
    },
    breakfastButton: {
        marginVertical: 15,
        zIndex: 1000,
        position: 'absolute',
        marginHorizontal: 15,
        bottom: 0
    },
    itemName: {
        fontWeight: '700',
        fontSize: 16,
        color: COLORS.PROFILE_INFO_LIST_TITLE
    },
    reviews: {
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.REMEMBER_ME,
        marginLeft: 5,
        lineHeight: 16.84
    },
    itemNameText: {
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 15.64,
        color: COLORS.PROFILE_INFO_LIST_TITLE,
    },
    lineView: {
        height: 1,
        width: '100%',
        backgroundColor: COLORS.TEXTINPUT_BG,
        marginVertical: 20
    },
    addText: {
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 15.64,
        color: COLORS.REMEMBER_ME,
        marginTop: 15
    },
})