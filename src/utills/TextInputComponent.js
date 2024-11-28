import { TextInput, StyleSheet } from 'react-native'
import { COLORS } from './Colors';
import { forwardRef } from 'react';

const TextInputComponent = forwardRef(({
    placeholder,
    placeholderTextColor,
    value,
    onFocus,
    onChangeText,
    secureTextEntry,
    style,
    multiline,
    maxLength,
    keyboardType
}, ref) => {
    return (
        <>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                style={[styles.textInput, style]}
                value={value}
                ref={ref}
                onFocus={onFocus}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                multiline={multiline}
                maxLength={maxLength}
                keyboardType={keyboardType}
            />
        </>
    )
})

export default TextInputComponent;

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: COLORS.TEXTINPUT_BG,
        height: 62,
        width: '100%',
        borderRadius: 10,
        padding: 20,
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16.84,
        color: COLORS.TITLE,
        marginBottom: 30
    },
})