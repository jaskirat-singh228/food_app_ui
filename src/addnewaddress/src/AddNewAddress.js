import { FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SafeAreaViewComponent from '../../utills/SafeAreaViewComponent'
import CommonViewComponent from '../../utills/CommonViewComponent'
import { IMAGES } from '../../utills/Images'
import { useNavigation } from '@react-navigation/native'
import ImageComponent from '../../utills/ImageComponent'
import { COLORS } from '../../utills/Colors'
import TextInputComponent from '../../utills/TextInputComponent'
import TextComponent from '../../utills/TextComponent'
import { LISTS } from '../../utills/Lists'
import CommonButton from '../../utills/CommonButton'

const AddNewAddress = () => {
    const navigation = useNavigation();
    const addressList = LISTS.addressList;
    const [selectedCategory, setSelectedCategory] = useState('')

    return (
        <SafeAreaViewComponent children={
            <>
                <View style={styles.mapView}>
                </View>
                <TouchableOpacity style={{ zIndex: 1000, paddingLeft: 24,marginTop:Platform.OS=='android'?24:0 }} onPress={() => navigation.goBack()}>
                    <ImageComponent source={IMAGES.TRACKORDER_BACK} />
                </TouchableOpacity>
                <CommonViewComponent children={
                    <>
                        <View style={{ height: 220 }} />
                        <TextComponent text={'ADDRESS'} style={styles.email} />
                        <View style={styles.textInputView}>
                            <ImageComponent source={IMAGES.ADDRESS_MAP_PIN} />
                            <TextInputComponent placeholder={'Search location'} placeholderTextColor={COLORS.PROFILE_INFO_LIST_SUBTITLE} style={{ marginBottom: 0, padding: 15 }} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ width: '45%' }}>
                                <TextComponent text={'STREET'} style={styles.email} />
                                <TextInputComponent placeholder={'Enter street'} placeholderTextColor={COLORS.PROFILE_INFO_LIST_SUBTITLE} style={{ marginBottom: 25, padding: 15, width: '100%' }} />
                            </View>
                            <View style={{ width: '45%', }}>
                                <TextComponent text={'POST CODE'} style={styles.email} />
                                <TextInputComponent placeholder={'Enter code'} placeholderTextColor={COLORS.PROFILE_INFO_LIST_SUBTITLE} style={{ marginBottom: 25, padding: 15, width: '100%' }} />
                            </View>
                        </View>
                        <TextComponent text={'APPARTMENT'} style={styles.email} />
                        <TextInputComponent placeholder={'Enter appartment'} placeholderTextColor={COLORS.PROFILE_INFO_LIST_SUBTITLE} style={{ marginBottom: 25, padding: 15 }} />
                        <TextComponent text={'LABEL AS'} style={styles.email} />
                        <View style={{ marginBottom: 20 }}>
                            <FlatList
                                data={addressList}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity onPress={() => setSelectedCategory(item.name)} style={[styles.listView, { backgroundColor: selectedCategory == item.name ? COLORS.RESTAURANT_CATEGORY_BG : COLORS.TEXTINPUT_BG }]}>
                                            <TextComponent text={item.name} style={[styles.itemText, { color: selectedCategory == item.name ? COLORS.MAIN_BG : COLORS.TITLE }]} />
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                            <CommonButton onPress={() => navigation.goBack()} title={'SAVE LOCATION'} />
                        </View>
                    </>
                } />
            </>
        } />
    )
}

export default AddNewAddress

const styles = StyleSheet.create({
    mapView: {
        position: 'absolute',
        top: 0,
        height: 295,
        width: '100%',
        backgroundColor: COLORS.COMMON_GRAY,
        zIndex: 900
    },
    email: {
        color: COLORS.TITLE,
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16.84,
        marginBottom: 10
    },
    textInputView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 62,
        backgroundColor: COLORS.TEXTINPUT_BG,
        borderRadius: 10,
        width: '100%',
        padding: 20,
        marginBottom: 25
    },
    textInput: {
        padding: 0,
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16.84,
        color: COLORS.TITLE,
        marginBottom: 30
    },
    listView: {
        height: 45,
        width: 94,
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    itemText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16.84,
    },
    saveButton: {
        backgroundColor: COLORS.ACTIVE_INDICATOR,
        paddingHorizontal: 115,
        paddingVertical: 20,
        borderRadius: 12,
    },
    saveButtonText: {
        fontSize: 14,
        fontWeight: '700',
        color: COLORS.MAIN_BG,
    },
})