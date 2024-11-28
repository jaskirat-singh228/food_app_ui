import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextComponent from '../../../utills/TextComponent'
import ImageComponent from '../../../utills/ImageComponent'
import { COLORS } from '../../../utills/Colors'
import { IMAGES } from '../../../utills/Images'

const CommonText = ({ title, titleSyle, buttonTitlestyle }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextComponent text={title} style={[styles.allCategories,titleSyle]} />
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <TextComponent text={'See All'} style={[styles.seeAll,buttonTitlestyle]} />
                <ImageComponent source={IMAGES.RIGHT_ARROW} />
            </TouchableOpacity>
        </View>
    )
}

export default CommonText

const styles = StyleSheet.create({
    allCategories: {
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 24.06,
        color: COLORS.TITLE,
        marginVertical: 15
    },
    seeAll:{
        paddingRight: 10 ,
        color:COLORS.TITLE
    }
})