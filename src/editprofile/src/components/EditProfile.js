import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SafeAreaViewComponent from '../../../utills/SafeAreaViewComponent'
import CommonViewComponent from '../../../utills/CommonViewComponent'
import { useNavigation } from '@react-navigation/native'
import BackButtonHeader from '../../../utills/BackButtonHeader'
import { COLORS } from '../../../utills/Colors'
import ImageComponent from '../../../utills/ImageComponent'
import { IMAGES } from '../../../utills/Images'
import TextInputComponent from '../../../utills/TextInputComponent'
import TextComponent from '../../../utills/TextComponent'
import CommonButton from '../../../utills/CommonButton'

const EditProfile = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaViewComponent children={
            <CommonViewComponent children={
                <>
                    <BackButtonHeader title={'Edit Profile'} />
                    <View style={styles.userImage}>
                        <TouchableOpacity>
                            <ImageComponent source={IMAGES.CHANGE_PROFILE_PIC} />
                        </TouchableOpacity>
                    </View>
                    <TextComponent text={'FULL NAME'} style={styles.email} />
                    <TextInputComponent placeholder={'Enter full name'} placeholderTextColor={COLORS.PROFILE_INFO_LIST_SUBTITLE} style={[styles.textInput, { marginBottom: 25, height: 62 }]} />
                    <TextComponent text={'EMAIL'} style={styles.email} />
                    <TextInputComponent placeholder={'Enter email'} placeholderTextColor={COLORS.PROFILE_INFO_LIST_SUBTITLE} style={[styles.textInput, { marginBottom: 25, height: 62 }]} />
                    <TextComponent text={'PHONE NUMBER'} style={styles.email} />
                    <TextInputComponent placeholder={'Enter phone number'} placeholderTextColor={COLORS.PROFILE_INFO_LIST_SUBTITLE} style={[styles.textInput, { marginBottom: 25, height: 62 }]} />
                    <TextComponent text={'BIO'} style={styles.email} />
                    <TextInputComponent placeholder={'Enter bio'} placeholderTextColor={COLORS.PROFILE_INFO_LIST_SUBTITLE} multiline={true} style={styles.textInput} />
                    <View style={{flex:1,alignContent:'center',justifyContent:'flex-end'}}>
                    <CommonButton onPress={() => navigation.goBack()} title={'SAVE'} />
                    </View>
                </>
            } />
        } />
    )
}

export default EditProfile

const styles = StyleSheet.create({
    userImage: {
        height: 130,
        width: 130,
        borderRadius: 200,
        backgroundColor: COLORS.INACTIVE_INDICATOR,
        alignSelf: 'center',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginVertical: 20
    },
    email: {
        color: COLORS.TITLE,
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16.84,
        marginBottom: 10,
    },
    textInput: {
        height: 103,
        marginBottom: 0,
    },
})