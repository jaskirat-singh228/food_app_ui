import { StyleSheet, View } from 'react-native';
import React, { useRef, useState } from 'react';
import CommonTextInputComponent from '../../../utills/CommonTextInputComponent';
import { COLORS } from '../../../utills/Colors';

const CardNumberTextInput = () => {
    const inputRefs = useRef([]);
    const [values, setValues] = useState(Array(12).fill(''));

    const handleTextChange = (text, index) => {
        const newValues = [...values];
        newValues[index] = text;
        setValues(newValues);

        // Focus next input or stay if backspacing
        if (text && index < 11) {
            inputRefs.current[index + 1]?.focus();
        } else if (!text && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <View style={styles.inputsContainer}>
            {values.map((value, index) => (
                <CommonTextInputComponent
                    key={index}
                    textInputStyle={[
                        styles.cardNumberTextInput,
                        { marginRight: values ? 2 : 4 },
                        !value && {
                            borderBottomWidth: 1.5,
                            borderBottomColor: COLORS.TITLE,
                        },
                        (index === 3 || index === 7) && { marginRight: 10 }
                    ]}
                    ref={(el) => (inputRefs.current[index] = el)}
                    onChangeText={(text) => handleTextChange(text, index)}
                    maxLength={1}
                />
            ))}
        </View>
    );
};

export default CardNumberTextInput;

const styles = StyleSheet.create({
    inputsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardNumberTextInput: {
        fontSize: 16,
        color: COLORS.TITLE,
        fontWeight: '400',
        height: 16,
        width: 8.2,
    },
});
