import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../utills/Colors'
import TextComponent from '../../utills/TextComponent'
import { useNavigation } from '@react-navigation/native'
import CommonButton from '../../utills/CommonButton'
import { makeShareable } from 'react-native-reanimated/lib/typescript/shareables'
import CommonViewComponent from '../../utills/CommonViewComponent'

const PaymentSuccessful = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.main}>
            <CommonViewComponent style={{justifyContent:'center',alignItems:'center'}} children={
                <>
                <View style={styles.image} />
            <TextComponent text={'Congratulations!'} style={styles.title} />
            <TextComponent text={'You successfully maked a payment, enjoy our service!'} style={styles.subTital} />
                </>
            }/>
            <CommonButton onPress={() => navigation.navigate('TrackOrder')} title='TRACK ORDER'  style={{width:'88%',marginBottom:Platform.OS=='android'?24:0}}/>
        </SafeAreaView>
    )
}

export default PaymentSuccessful

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.MAIN_BG
    },
    image: {
        height: 207,
        width: 228,
        backgroundColor: COLORS.COMMON_GRAY,
        borderRadius: 32,
        margin: 10
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 32,
        marginVertical: 20,
        color:COLORS.TITLE
    },
    subTital: {
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 24,
        color: COLORS.CONGRATS_SUBTITLE,
        paddingHorizontal: 50,
        textAlign: 'center'
    },
})