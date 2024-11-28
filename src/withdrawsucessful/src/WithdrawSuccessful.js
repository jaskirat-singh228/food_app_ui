import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeAreaViewComponent from '../../utills/SafeAreaViewComponent'
import CommonViewComponent from '../../utills/CommonViewComponent'
import ImageComponent from '../../utills/ImageComponent'
import { IMAGES } from '../../utills/Images'
import TextComponent from '../../utills/TextComponent'
import { COLORS } from '../../utills/Colors'
import CommonButton from '../../utills/CommonButton'

const WithdrawSuccessful = () => {
    return (
        <SafeAreaViewComponent children={
            <View style={styles.main}>
                <ImageComponent source={IMAGES.WITHDRAW_SUCCESSFULL} />
                <TextComponent text={'Withdraw Successful'} style={styles.withdrawSuccessfulText} />
                <CommonButton title={'OK'} style={{marginTop:20}} />
            </View>
        } />
    )
}

export default WithdrawSuccessful

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal:24
    },
    withdrawSuccessfulText: {
        fontWeight: '500',
        fontSize: 22,
        lineHeight: 33,
        color: COLORS.TITLE,
        marginTop: 80
    }
})