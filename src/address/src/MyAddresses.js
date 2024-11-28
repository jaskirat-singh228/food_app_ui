import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SafeAreaViewComponent from '../../utills/SafeAreaViewComponent'
import CommonViewComponent from '../../utills/CommonViewComponent'
import BackButtonHeader from '../../utills/BackButtonHeader'
import { LISTS } from '../../utills/Lists'
import { COLORS } from '../../utills/Colors'
import ImageComponent from '../../utills/ImageComponent'
import TextComponent from '../../utills/TextComponent'
import { IMAGES } from '../../utills/Images'
import { useNavigation } from '@react-navigation/native'
import CommonButton from '../../utills/CommonButton'

const MyAddresses = () => {
    const navigation = useNavigation();
    const address = LISTS.address

    const renderList = ({ item }) => {
        return (
            <TouchableOpacity style={styles.listView}>
                <ImageComponent source={item.icon} />
                <View style={{ marginLeft: 10, width: '100%' }}>
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <TextComponent text={item.title} style={styles.titleText} />
                        <View style={{ flexDirection: 'row', zIndex: 1000, width: '35%' }}>
                            <TouchableOpacity>
                                <ImageComponent source={IMAGES.EDIT} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <ImageComponent source={IMAGES.DELETE} style={{ marginLeft: 10 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TextComponent text={item.address} style={[styles.titleText, { opacity: 0.5, marginTop: 10, width: '85%' }]} numberOfLines={2} />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaViewComponent children={
            <CommonViewComponent children={
                <>
                    <BackButtonHeader title='My Address' isButton={false} />
                    <FlatList
                        data={address}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderList}
                    />
                        <CommonButton onPress={() => navigation.navigate('AddNewAddress')} title={'ADD NEW ADDRESS'}/>
                </>
            } />
        } />
    )
}

export default MyAddresses

const styles = StyleSheet.create({
    listView: {
        height: 101,
        width: '100%',
        backgroundColor: COLORS.TEXTINPUT_BG,
        borderRadius: 16,
        marginTop: 25,
        flexDirection: 'row',
        padding: 17
    },
    titleText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16.84,
        color: COLORS.TITLE,
        width: '65%',
    },
    addNewAddressButton: {
        backgroundColor: COLORS.ACTIVE_INDICATOR,
        paddingHorizontal: 103,
        paddingVertical: 20,
        borderRadius: 12,
        marginTop: 30,
    },
    addNewAddressButtonText: {
        fontSize: 14,
        fontWeight: '700',
        color: COLORS.MAIN_BG,
    },
})