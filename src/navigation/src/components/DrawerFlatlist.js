import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ImageComponent from '../../../utills/ImageComponent'
import TextComponent from '../../../utills/TextComponent'
import { COLORS } from '../../../utills/Colors'
import { IMAGES } from '../../../utills/Images'

const DrawerFlatlist = ({ data, onPressMenu, isNumber, text }) => {

    return (
        <View style={{ marginTop: 20, borderRadius: 10, backgroundColor: COLORS.PROFILE_INFO_LIST_BG, paddingVertical: 10 }}>
            {
                data.map((item, index) => (
                    <TouchableOpacity onPress={() => onPressMenu(item)} key={item?.id} style={styles.listView}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={styles.iconView}>
                                    <ImageComponent source={item.icon} />
                                </View>
                                <TextComponent text={item?.title} style={styles.titleText} />
                            </View>
                            {isNumber ? (index == 1 ?
                                <TextComponent text={text} style={styles.text} /> : <ImageComponent source={IMAGES.RIGHT_ARROW} />)
                                : <ImageComponent source={IMAGES.RIGHT_ARROW} />
                            }
                        </View>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

export default DrawerFlatlist

const styles = StyleSheet.create({
    listView: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: COLORS.PROFILE_INFO_LIST_BG,
        paddingVertical: 8,
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 17,
        fontWeight: '700',
        lineHeight: 20.45,
        color: COLORS.REMEMBER_ME
    },
    titleText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16.84,
        color: COLORS.PROFILE_INFO_LIST_TITLE,
        marginLeft: 15
    },
    iconView: {
        height: 40,
        width: 40,
        borderRadius: 200,
        backgroundColor: COLORS.MAIN_BG,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
