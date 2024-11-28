import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../utills/Colors'
import TextComponent from '../../utills/TextComponent'
import ImageComponent from '../../utills/ImageComponent'
import { IMAGES } from '../../utills/Images'
import { useNavigation } from '@react-navigation/native'
import CommonViewComponent from '../../utills/CommonViewComponent'
import SafeAreaViewComponent from '../../utills/SafeAreaViewComponent'

const DeliveryManCallScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaViewComponent style={{ backgroundColor: COLORS.COMMON_GRAY }} children={
            <>
                <CommonViewComponent style={{ backgroundColor: COLORS.COMMON_GRAY, justifyContent: 'flex-end', alignItems: 'center', marginHorizontal: 0 }} children={
                    <>
                    </>
                } />
                <View style={styles.modalView}>
                    <View style={styles.image} />
                    <TextComponent text={'Robert Fox'} style={styles.nameText} />
                    <TextComponent text={'Connecting.......'} style={styles.connecting} />
                    <View style={styles.iconsView}>
                        <TouchableOpacity>
                            <ImageComponent source={IMAGES.MUTE} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <ImageComponent source={IMAGES.END_CALL} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ImageComponent source={IMAGES.SPEAKER} />
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        } />
    )
}

export default DeliveryManCallScreen

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLORS.COMMON_GRAY,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    modalView: {
        width: '100%',
        height: 377,
        backgroundColor: COLORS.MAIN_BG,
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        alignItems: 'center',
        position:'absolute',
        bottom:-10
    },
    image: {
        height: 105.01,
        width: 105.01,
        borderRadius: 200,
        backgroundColor: COLORS.COMMON_GRAY,
        marginTop: 25
    },
    nameText: {
        lineHeight: 24.06,
        fontWeight: '700',
        fontSize: 20,
        color: COLORS.TITLE,
        marginTop: 15
    },
    connecting: {
        lineHeight: 20.64,
        fontSize: '400',
        fontSize: 16,
        color: COLORS.CONNECTING,
        marginTop: 5
    },
    iconsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '70%',
        marginTop: 30
    }
})