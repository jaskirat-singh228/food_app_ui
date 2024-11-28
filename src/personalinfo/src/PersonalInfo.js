import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SafeAreaViewComponent from '../../utills/SafeAreaViewComponent'
import CommonViewComponent from '../../utills/CommonViewComponent'
import ImageComponent from '../../utills/ImageComponent'
import { COLORS } from '../../utills/Colors'
import TextComponent from '../../utills/TextComponent'
import { LISTS } from '../../utills/Lists'
import { useNavigation } from '@react-navigation/native'
import BackButtonHeader from '../../utills/BackButtonHeader'

export default function ProfileInfo() {
    const navigation = useNavigation();
    const personalInfoList = LISTS.personalInfoList;

    const renderList = ({ item }) => {
        return (
            <TouchableOpacity style={styles.listView}>
                <View style={{ flexDirection: 'row' }}>
                    <ImageComponent source={item.icon} />
                    <View style={{ marginLeft: 15 }}>
                        <TextComponent text={item?.title} style={styles.titleText} />
                        <TextComponent text={item?.subTitle} style={[styles.titleText, { color: COLORS.PROFILE_INFO_LIST_SUBTITLE }]} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaViewComponent children={
                <CommonViewComponent children={
                    <>
                    <BackButtonHeader title={'Personal Info'} isButton={true} buttonTitle={'Edit'} buttonOnPress={() => navigation.navigate('EditProfile')} isIcon={false} />
                        <View style={styles.imageAndNameView}>
                            <View style={styles.image} />
                            <View style={{ marginLeft: 35 }}>
                                <TextComponent text={'Vishal Khadok'} style={styles.nameText} />
                                <TextComponent text={'I love fast food'} style={styles.bioText} />
                            </View>
                        </View>
                        <View style={{ marginTop: 35, borderRadius: 10, backgroundColor: COLORS.PROFILE_INFO_LIST_BG, paddingVertical: 15 }}>
                            <FlatList
                                style={{ borderRadius: 16 }}
                                data={personalInfoList}
                                keyExtractor={(item) => item?.id.toString()}
                                renderItem={renderList}
                            />
                        </View>
                    </>
                } />
        } />
    )
}

const styles = StyleSheet.create({
    editItemsText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 24,
        color: COLORS.ACTIVE_INDICATOR,
        textDecorationLine: 'underline',
        width: 80,
        textAlign: 'right',
    },
    personalDetailsText: {
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22,
        paddingHorizontal: 20
    },
    imageAndNameView: {
        width: '100%',
        marginTop: 70,
        flexDirection: 'row',
         alignItems: 'center',
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 200,
        backgroundColor: COLORS.COMMON_GRAY
    },
    nameText: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 24.06,
        color: COLORS.TITLE
    },
    bioText: {
        color: COLORS.PLACEHOLDER,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 24
    },
    listView: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: COLORS.PROFILE_INFO_LIST_BG,
        paddingVertical: 8,
        paddingHorizontal: 20
    },
    titleText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16.84,
        color: COLORS.PROFILE_INFO_LIST_TITLE
    },
})