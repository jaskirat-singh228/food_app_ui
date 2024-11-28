import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SafeAreaViewComponent from '../../utills/SafeAreaViewComponent'
import CommonViewComponent from '../../utills/CommonViewComponent'
import ImageComponent from '../../utills/ImageComponent'
import TextComponent from '../../utills/TextComponent'
import BackButtonHeader from '../../utills/BackButtonHeader'
import { LISTS } from '../../utills/Lists'
import { COLORS } from '../../utills/Colors'
import { IMAGES } from '../../utills/Images'
import ButtonComponent from '../../utills/ButtonComponent'
import { useNavigation } from '@react-navigation/native'
import CommonButton from '../../utills/CommonButton'

const PaymentMethod = () => {
    const paymentmethod = LISTS.paymentmethod;
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedCategoryName, setSelectedCategoryName] = useState('');
    const [selectedCategoryImage, setSelectedCategoryImage] = useState(0);
    const navigation = useNavigation();

    useEffect(() => {
        console.log(selectedCategory);
    }, [selectedCategory,selectedCategoryName,selectedCategoryImage]);

    const handlePress = (item) => {
        setSelectedCategory(item.id)
        setSelectedCategoryName(item.name)
        setSelectedCategoryImage(item.image)
    }

    const rnderList = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => handlePress(item)} style={styles.listMainView}>
                {selectedCategory == item.id ?
                    <ImageComponent source={IMAGES.TICK} style={styles.tick} />
                    : null}
                <TouchableOpacity onPress={() => handlePress(item)} style={[styles.listView, {
                    borderWidth: selectedCategory == item.id ? 2 : 0,
                    borderColor: selectedCategory == item.id ? COLORS.ACTIVE_INDICATOR : null
                }]}>
                    <ImageComponent source={item?.image} />
                </TouchableOpacity>
                <TextComponent text={item?.name} style={styles.listTitleText} />
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaViewComponent children={
            <CommonViewComponent children={
                <>
                    <BackButtonHeader title={'Payment'} isButton={false} />
                    <View style={{ width: '100%' }}>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={paymentmethod}
                            keyExtractor={(item) => item?.id.toString()}
                            renderItem={rnderList}
                        />
                    </View>
                    {selectedCategory  ?
                        <TouchableOpacity style={styles.selectedCardView}>
                            <View>
                                <TextComponent text={selectedCategoryName} style={styles.selectedCardTitle} />
                                <View style={{ flexDirection: 'row', }}>
                                    <ImageComponent source={selectedCategoryImage} />
                                </View>
                            </View>
                            <TouchableOpacity style={{ justifyContent: 'center' }}>
                                <ImageComponent source={IMAGES.DOWN_ARROW} />
                            </TouchableOpacity>
                        </TouchableOpacity>
                        : null}
                    <TouchableOpacity onPress={() => navigation.navigate('AddCard')} style={styles.addButton}>
                        <ImageComponent source={IMAGES.PAYMENT_PLUS} />
                        <TextComponent text={'ADD NEW'} style={{ paddingHorizontal: 10, color: COLORS.ACTIVE_INDICATOR }} />
                    </TouchableOpacity>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextComponent text={'TOTAL:'} style={styles.totalText} />
                            <TextComponent text={'$TOTAL'} style={styles.totalnumber} />
                        </View>
                        <CommonButton onPress={() => navigation.navigate('PaymentSuccessful')} title='PAY & CONFIRM' />
                    </View>
                </>
            } />
        } />
    )
}

export default PaymentMethod

const styles = StyleSheet.create({
    listMainView: {
        marginTop: 30,
        marginBottom: 20,
        alignItems: 'center',
        marginRight: 20
    },
    listView: {
        backgroundColor: COLORS.TEXTINPUT_BG,
        height: 72,
        width: 85,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listTitleText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16.84,
        color: COLORS.PAYMENT_METHOD_TITLE,
        marginTop: 5,
    },
    tick: {
        position: 'absolute',
        zIndex: 1000,
        top: -6,
        right: 0
    },
    selectedCardView: {
        height: 82,
        width: '100%',
        borderRadius: 10,
        backgroundColor: COLORS.PAYMENT_METHOD_SELECTED_CARD_BG,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    selectedCardTitle: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 19.25,
        color: COLORS.PROFILE_INFO_LIST_TITLE
    },
    addButton: {
        height: 62,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: COLORS.TEXTINPUT_BG,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    totalText: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: '400',
        color: COLORS.PLACEHOLDER
    },
    totalnumber: {
        fontSize: 30,
        fontWeight: '400',
        lineHeight: 36.09,
        paddingHorizontal: 15,
        color:COLORS.TITLE
    },
    loginButton: {
        backgroundColor: COLORS.ACTIVE_INDICATOR,
        paddingHorizontal: 117,
        paddingVertical: 20,
        borderRadius: 12,
        marginTop: 30,
    },
    loginButtonText: {
        fontSize: 14,
        fontWeight: '700',
        color: COLORS.MAIN_BG,
    },
})