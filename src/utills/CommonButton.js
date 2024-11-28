import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonComponent from './ButtonComponent'
import { COLORS } from './Colors'

const CommonButton = ({ onPress, style, title, titleStyle }) => {
    return (
        <ButtonComponent onPress={onPress} style={[styles.button, style]} title={title} textStyle={[styles.text, titleStyle]} />
    )
}

export default CommonButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.ACTIVE_INDICATOR,
        height: 62,
        width: '100%',
        borderRadius: 12,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 14,
        fontWeight: '700',
        color: COLORS.MAIN_BG
    },
})