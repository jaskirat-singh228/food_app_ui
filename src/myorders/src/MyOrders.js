import { FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SafeAreaViewComponent from '../../utills/SafeAreaViewComponent'
import BackButtonHeader from '../../utills/BackButtonHeader'
import { IMAGES } from '../../utills/Images'
import CommonViewComponent from '../../utills/CommonViewComponent'
import TextComponent from '../../utills/TextComponent'
import { COLORS } from '../../utills/Colors'
import ButtonComponent from '../../utills/ButtonComponent'
import { LISTS } from '../../utills/Lists'

const MyOrders = () => {
    const ongoingList = LISTS.ongoingList;
    const [tab, setTab] = useState('Ongoing');

    const renderList = ({ item }) => {
        return (
            <TouchableOpacity style={{ height: 171, marginTop: 30 }}>
                {
                    tab == 'History' ?
                        (<View style={{ flexDirection: 'row' }}>
                            <TextComponent text={item.title} style={styles.titleText} />
                            <TextComponent text={item.complete} style={[styles.titleText, { color: item.id == 3 ? 'red' : COLORS.DONE, fontWeight: '700', marginLeft: 25 }]} />
                        </View>)
                        :
                        (<TextComponent text={item.title} style={styles.titleText} />)
                }
                <View style={styles.listView}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.imageView} />
                        <View style={{ marginLeft: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90.5%' }}>
                                <TextComponent text={item.shopName} style={styles.shopNameText} numberOfLines={1} />
                                <TextComponent text={item.otp} style={[styles.shopNameText, { fontWeight: '400', textDecorationLine: 'underline', color: COLORS.PROFILE_INFO_LIST_SUBTITLE, alignSelf: 'flex-end' }]} />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TextComponent text={item.prize} style={styles.shopNameText} />
                                <View style={styles.smallLine} />
                                {tab == 'History' ?
                                    (<>
                                        <TextComponent text={item.date} style={styles.itemsText} />
                                        <View style={[styles.smallLine, { height: 4, width: 4, backgroundColor: COLORS.TITLE, opacity: 0.6 }]} />
                                    </>)
                                    : null}
                                <TextComponent text={`${item.items} Items`} style={styles.itemsText} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttonsView}>
                        <ButtonComponent style={styles.loginButton}
                            title={tab == 'History' ? 'Rate' : 'Track order'} textStyle={[styles.loginButtonText, { color: COLORS.MAIN_BG }]} />
                        <ButtonComponent style={[styles.loginButton, { backgroundColor: COLORS.MAIN_BG, borderWidth: 1, borderColor: COLORS.ACTIVE_INDICATOR }]}
                            title={tab == 'History' ? 'Re-Order' : 'Cancel'} textStyle={[styles.loginButtonText, { color: COLORS.ACTIVE_INDICATOR }]} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaViewComponent children={
            <>
                <View style={styles.indicatorBgView} />
                <CommonViewComponent
                    children={
                        <>
                            <BackButtonHeader title={'My Orders'} isButton={true} isIcon={true} image={IMAGES.NAVIGATION_DOTS} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 60, width: '100%', }}>
                                <TouchableOpacity onPress={() => setTab('Ongoing')} style={{ width: '45%' }}>
                                    <TextComponent text={'Ongoing'} style={[styles.ongoingText, { color: tab == 'Ongoing' ? COLORS.ACTIVE_INDICATOR : COLORS.PLACEHOLDER, fontWeight: tab == 'Ongoing' ? '700' : '400' }]} />
                                    {tab == 'Ongoing' ? <View style={styles.indicatorView} /> : null}
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setTab('History')} style={{ width: '45%' }}>
                                    <TextComponent text={'History'} style={[styles.ongoingText, { color: tab == 'History' ? COLORS.ACTIVE_INDICATOR : COLORS.PLACEHOLDER, fontWeight: tab == 'History' ? '700' : '400' }]} />
                                    {tab == 'History' ? <View style={styles.indicatorView} /> : null}
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={ongoingList}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={renderList}
                            />
                        </>
                    } />
            </>
        } />
    )
}

export default MyOrders

const styles = StyleSheet.create({
    ongoingText: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 16.84,
        color: COLORS.ACTIVE_INDICATOR,
        alignSelf: 'center'
    },
    indicatorView: {
        height: 2,
        width: 150,
        backgroundColor: COLORS.ACTIVE_INDICATOR,
        marginTop: 15,
        borderRadius: 200
    },
    indicatorBgView: {
        height: 0.5,
        width: '100%',
        backgroundColor: COLORS.PLACEHOLDER,
        position: 'absolute',
        top: Platform.OS == 'android' ? 117 : 151.5,
        zIndex: 10000,
        opacity: 0.5
    },
    titleText: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16.84,
        color: COLORS.TITLE,
    },
    listView: {
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: COLORS.TEXTINPUT_BG,
        marginTop: 15,
    },
    imageAndTitleView: {
        flexDirection: 'row',
        height: 60,
    },
    imageView: {
        height: 60,
        width: 60,
        backgroundColor: COLORS.COMMON_GRAY,
        borderRadius: 8
    },
    shopNameText: {
        fontSize: 14,
        fontWeight: '700',
        color: COLORS.TITLE,
        lineHeight: 16.84,
        marginVertical: 5,
    },
    smallLine: {
        height: 16,
        backgroundColor: COLORS.PLACEHOLDER,
        width: 1,
        marginHorizontal: 10,
        borderRadius: 10
    },
    itemsText: {
        color: COLORS.PROFILE_INFO_LIST_SUBTITLE,
        fontSize: 12,
        lineHeight: 14.44,
        fontWeight: '400'
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    loginButton: {
        backgroundColor: COLORS.ACTIVE_INDICATOR,
        borderRadius: 12,
        marginTop: 25,
        width: '45%',
        height: 38,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginButtonText: {
        fontSize: 12,
        fontWeight: '700',
        color: COLORS.MAIN_BG,
        lineHeight: 14.44
    },
})