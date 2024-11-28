import { StyleSheet } from 'react-native'
import React from 'react'
import TextComponent from './TextComponent'

const CommonText = ({ title, style }) => {
    
    return (
        <TextComponent text={title} style={[styles.text,  style ]} />
    )
}

export default CommonText

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 24.06,
        paddingVertical: 10
    },
})