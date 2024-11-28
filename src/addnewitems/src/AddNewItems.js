import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SafeAreaViewComponent from '../../utills/SafeAreaViewComponent'
import CommonViewComponent from '../../utills/CommonViewComponent'
import BackButtonHeader from '../../utills/BackButtonHeader'
import TextComponent from '../../utills/TextComponent'
import { COLORS } from '../../utills/Colors'
import TextInputComponent from '../../utills/TextInputComponent'
import ImageComponent from '../../utills/ImageComponent'
import { IMAGES } from '../../utills/Images'
import CommonText from '../../homescreen/src/components/CommonText'
import CommonButton from '../../utills/CommonButton'

const AddNewItems = () => {
    const [isChecked, setIsChecked] = useState('Pick up');

    const renderImageList = ({ item }) => {
        return (
            <TouchableOpacity style={styles.listView}>
                <ImageComponent source={IMAGES.UPLOAD_FOOD_IMAGE} />
                <TextComponent text={'Add'} style={styles.addText} />
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaViewComponent children={
            <CommonViewComponent children={
                <ScrollView showsVerticalScrollIndicator={false}>
                    <BackButtonHeader title={'Add New Items'} isButton={true} buttonTitle={'RESET'} buttonTitleText={{ textDecorationLine: 'none', }} />
                    <TextComponent text={'ITEM NAME'} style={styles.itemNameText} />
                    <TextInputComponent placeholder={'Mazalichiken Halim'} placeholderTexColor={COLORS.REMEMBER_ME} style={styles.textInput} />
                    <TextComponent text={'UPLOAD PHOTO/VIDEO'} style={[styles.itemNameText, { marginTop: 25 }]} />
                    <View style={{ marginTop: 20 }}>
                        <FlatList
                            data={[1, 2, 3, 4, 5]}
                            renderItem={renderImageList}
                            keyExtractor={(item) => item}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <TextComponent text={'PRIZE'} style={[styles.itemNameText, { marginTop: 25 }]} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <View style={styles.prizeView}>
                            <TextComponent text={'$50'} style={[styles.addText, { marginTop: 0, fontSize: 14, lineHeight: 16.84 }]} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => setIsChecked('Pick up')}
                                style={[styles.checkBoxView, { borderColor: isChecked == 'Pick up' ? COLORS.ACTIVE_INDICATOR : COLORS.CHECKBOX }]}>
                                {isChecked == 'Pick up' && (<ImageComponent source={IMAGES.CHEF_CHECK} />)}
                            </TouchableOpacity>
                            <TextComponent text={'Pick up'} style={styles.rememberMe} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => setIsChecked('Delivery')}
                                style={[styles.checkBoxView, { borderColor: isChecked == 'Delivery' ? COLORS.ACTIVE_INDICATOR : COLORS.CHECKBOX }]}>
                                {isChecked == 'Delivery' && (<ImageComponent source={IMAGES.CHEF_CHECK} />)}
                            </TouchableOpacity>
                            <TextComponent text={'Delivery'} style={styles.rememberMe} />
                        </View>
                    </View>
                    <TextComponent text={'INTEGRIDENTS'} style={[styles.itemNameText, { marginTop: 25 }]} />
                    <CommonText title={'Basic'} titleSyle={[styles.itemNameText, { fontSize: 14, marginTop: 20 }]} buttonTitlestyle={{ color: COLORS.REMEMBER_ME }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <ImageComponent source={IMAGES.CHEF_SALT} />
                        <ImageComponent source={IMAGES.CHEF_CHICKEN} />
                        <ImageComponent source={IMAGES.CHEF_ONION} />
                        <ImageComponent source={IMAGES.CHEF_GARLIC} />
                        <ImageComponent source={IMAGES.CHEF_PAPPERS} />
                    </View>
                    <CommonText title={'Fruit'} titleSyle={[styles.itemNameText, { fontSize: 14, marginTop: 20 }]} buttonTitlestyle={{ color: COLORS.REMEMBER_ME }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <ImageComponent source={IMAGES.AVOCADO} />
                        <ImageComponent source={IMAGES.CHEF_APPLE} />
                        <ImageComponent source={IMAGES.BLUEBERRY} />
                        <ImageComponent source={IMAGES.BROCCOLI} />
                        <ImageComponent source={IMAGES.ORANGE} />
                    </View>
                    <TextComponent text={'DETAILS'} style={[styles.itemNameText, { marginTop: 20 }]} />
                    <View style={styles.detailView}>
                        <TextComponent text={'Lorem ipsum dolor sit amet, consectetur adips cing elit. Bibendum in vel, mattis et amet dui mauris turpis.'} style={[styles.addText, { marginTop: 0,fontSize:15 }]} />
                    </View>
                    <CommonButton title={'SAVE CHANGES'} style={{marginTop:40,marginBottom:80}} />
                </ScrollView>
            } />
        } />
    )
}

export default AddNewItems

const styles = StyleSheet.create({
    itemNameText: {
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 15.64,
        color: COLORS.PROFILE_INFO_LIST_TITLE,
        marginTop: 70
    },
    textInput: {
        backgroundColor: COLORS.MAIN_BG,
        borderWidth: 1,
        borderColor: COLORS.BORDER_BOTTOM_COLOR,
        fontSize: 12,
        marginTop: 10,
        marginBottom: 0,
    },
    listView: {
        height: 101,
        width: 111,
        borderRadius: 20,
        marginRight: 24,
        borderWidth: 1,
        borderColor: COLORS.BORDER_BOTTOM_COLOR,
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addText: {
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 15.64,
        color: COLORS.REMEMBER_ME,
        marginTop: 10
    },
    prizeView: {
        height: 42,
        width: 115,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.BORDER_BOTTOM_COLOR,
        paddingHorizontal: 15,
        paddingVertical: 11
    },
    rememberMe: {
        color: COLORS.REMEMBER_ME,
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 15.64,
        paddingHorizontal: 10
    },
    checkBoxView: {
        height: 20,
        width: 20,
        borderWidth: 2,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailView: {
        height: 103,
        width: '100%',
        backgroundColor: COLORS.DETAILS_BG,
        borderRadius: 8,
        borderColor: COLORS.BORDER_BOTTOM_COLOR,
        borderWidth: 1,
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 18,
        alignItems: 'center',
    }
})