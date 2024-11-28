import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import CommonViewComponent from '../../utills/CommonViewComponent'
import ImageComponent from '../../utills/ImageComponent'
import TextComponent from '../../utills/TextComponent'
import { IMAGES } from '../../utills/Images'
import { COLORS } from '../../utills/Colors'
import { Modalize } from 'react-native-modalize'
import { useNavigation } from '@react-navigation/native'
import SafeAreaViewComponent from '../../utills/SafeAreaViewComponent'

const TrackOrder = () => {
    const navigation = useNavigation();

    const handleCall = (event) => {
        event.persist(); // Prevents event from being nullified
        setTimeout(() => {
            console.log('jhgvfcgvhbjnbghjknm');
            navigation.navigate('DeliveryManCallScreen')
        }, 1000);
    }


    return (
        <SafeAreaViewComponent style={{ backgroundColor: COLORS.TRACKORDER_BG,}} children={
            <>
                <CommonViewComponent style={{ backgroundColor: COLORS.TRACKORDER_BG, marginHorizontal: 0 }}
                    children={
                        <>
                            <View style={styles.topView}>
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <ImageComponent source={IMAGES.TRACKORDER_BACK} />
                                </TouchableOpacity>
                                <TextComponent text={'Track Order'} style={styles.trackOrderText} />
                            </View>
                        </>
                    }
                />
                 <Modalize
                                handlePosition='inside'
                                modalStyle={styles.modlizeStyle}
                                handleStyle={styles.indicatorStyle}
                                snapPoint={180}
                                modalHeight={620}
                                alwaysOpen={180}
                            >
                                <View style={{ padding: 24, height: 600 }}>
                                    <View style={styles.modalChildView}>
                                        <View style={styles.restaurantImage} />
                                        <View style={{ paddingHorizontal: 10, marginTop: 5, width: '60%' }}>
                                            <TextComponent text={'Uttora Coffee House'} style={styles.restaurantNameText} />
                                            <TextComponent text={'Orderd at 06 Sept, 10:00pm'} style={styles.orderDateAndTimeText} />
                                            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                                <TextComponent text={'2x '} style={[styles.orderDateAndTimeText, { fontWeight: '700' }]} />
                                                <TextComponent text={'Burger'} style={styles.orderDateAndTimeText} />
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <TextComponent text={'4x '} style={[styles.orderDateAndTimeText, { fontWeight: '700' }]} />
                                                <TextComponent text={'Sanwitch'} style={styles.orderDateAndTimeText} />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ alignItems: 'center', marginTop: 40, marginBottom: 20 }}>
                                        <TextComponent text={'20 min'} style={styles.minText} />
                                        <TextComponent text={'Estimated delivery time'} style={styles.orderDateAndTimeText} />
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 20, }}>
                                        <View style={{ width: 40, alignItems: 'center', marginTop: 5 }}>
                                            <ImageComponent source={IMAGES.TRACKORDER_ENABLE_TICK} />
                                            <View style={{ height: 40, width: 2, backgroundColor: COLORS.ACTIVE_INDICATOR }} />
                                            <ImageComponent source={IMAGES.TRACKORDER_ENABLE_SUN} />
                                            <View style={{ height: 40, width: 2, backgroundColor: COLORS.PLACEHOLDER, opacity: 0.5 }} />
                                            <ImageComponent source={IMAGES.TRACKORDER_DISABLE_TICK} />
                                            <View style={{ height: 40, width: 2, backgroundColor: COLORS.PLACEHOLDER, opacity: 0.5 }} />
                                            <ImageComponent source={IMAGES.TRACKORDER_DISABLE_TICK} />
                                        </View>
                                        <View>
                                            <TextComponent text={'Your order has been received'} style={[styles.orderDateAndTimeText, { marginBottom: 20, color: COLORS.ACTIVE_INDICATOR }]} />
                                            <TextComponent text={'The restaurant is preparing your food'} style={[styles.orderDateAndTimeText, { marginTop: 20, marginBottom: 20 }]} />
                                            <TextComponent text={'Your order has been picked up for delivery'} style={[styles.orderDateAndTimeText, { marginTop: 20, marginBottom: 20 }]} />
                                            <TextComponent text={'Order arriving soon!'} style={[styles.orderDateAndTimeText, { marginTop: 20, marginBottom: 20 }]} />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.deliveryManView}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '45%' }}>
                                        <View style={styles.deliveryManImage} />
                                        <View style={{ justifyContent: 'center', marginLeft: 10, width: 100 }}>
                                            <Text numberOfLines={1} style={styles.deliveryManNameText}>{'Robert Fox'}</Text>
                                            <TextComponent text={'Courier'} style={[styles.orderDateAndTimeText, { matrixTransform: 0 }]} />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '45%', alignItems: 'center', justifyContent: 'center' }}>
                                        <TouchableOpacity onPress={(event) => handleCall(event)}>
                                            <ImageComponent source={IMAGES.TRACKORDER_CALL} style={{ marginTop: 12 }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => navigation.navigate('DeliveryManChatScreen')}>
                                            <ImageComponent source={IMAGES.TRACKORDER_CHAT} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modalize>
            </>
        } />
    )
}

export default TrackOrder

const styles = StyleSheet.create({
    trackOrderText: {
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22,
        paddingHorizontal: 20
    },
    topView: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: Platform.OS == 'android' ? 0 : 60,
        marginHorizontal: 24
    },
    modlizeStyle: {
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        backgroundColor: COLORS.MAIN_BG,
    },
    indicatorStyle: {
        top: 8,
        width: 70,
        height: 7,
        backgroundColor: COLORS.MODAL_INDICATOR_BG
    },
    modalChildView: {
        marginTop: 15,
        flexDirection: 'row',
    },
    restaurantImage: {
        backgroundColor: COLORS.COMMON_GRAY,
        height: 53,
        width: 63,
        borderRadius: 12
    },
    restaurantNameText: {
        fontSize: 18,
        fontFamily: '400',
        lineHeight: 21.66,
        color: COLORS.TITLE
    },
    orderDateAndTimeText: {
        fontSize: 14,
        color: COLORS.PLACEHOLDER,
        lineHeight: 16.84,
        fontWeight: '400',
        marginTop: 4
    },
    minText: {
        fontSize: 30,
        fontWeight: '800',
        lineHeight: 36.09,
        color: COLORS.TITLE,
    },
    deliveryManView: {
        height: Platform.OS=='android'?111:115,
        width: '100%',
        position: 'absolute',
        bottom: -20,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        borderWidth: 0.2,
        borderTopColor: COLORS.PLACEHOLDER,
        borderBottomColor: COLORS.MAIN_BG,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 30,
    },
    deliveryManImage: {
        height: 54,
        width: 54,
        borderRadius: 200,
        backgroundColor: COLORS.COMMON_GRAY
    },
    deliveryManNameText: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 24.06,
        color: COLORS.TITLE,
    },

})
