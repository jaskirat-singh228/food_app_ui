import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ImageComponent from './ImageComponent'
import TextComponent from './TextComponent'
import { IMAGES } from './Images'
import { useNavigation } from '@react-navigation/native'
import ButtonComponent from './ButtonComponent'
import { COLORS } from './Colors'

const BackButtonHeader = ({ title, isButton, buttonTitle, buttonOnPress, isIcon, image, onPress, style,isProductDetails,buttonTitleText }) => {
    const navigation = useNavigation();

    return (
        <>
            {isButton ?
                <View style={[styles.topView, style]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            {isProductDetails?<ImageComponent source={IMAGES.BACK} />
                            :<ImageComponent source={IMAGES.BACK_BUTTON} />}
                        </TouchableOpacity>
                        <TextComponent text={title} style={styles.titleText} />
                    </View>
                    {isIcon ?
                        <TouchableOpacity onPress={onPress}>
                            <ImageComponent source={image} />
                        </TouchableOpacity>
                        :
                        <ButtonComponent onPress={buttonOnPress} title={buttonTitle} textStyle={[styles.buttonTitleText,buttonTitleText]} />
                    }

                </View >
                :
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ImageComponent source={IMAGES.BACK_BUTTON} />
                    </TouchableOpacity>
                    <TextComponent text={title} style={styles.titleText} />
                </View>}
        </>
    )
}

export default BackButtonHeader

const styles = StyleSheet.create({
    topView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1000,
    },
    titleText: {
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22,
        paddingHorizontal: 20,
        color:COLORS.TITLE
    },
    buttonTitleText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 24,
        color: COLORS.ACTIVE_INDICATOR,
        textDecorationLine: 'underline',
        width: 80,
        textAlign: 'right',
    },
})