import { StyleSheet, View } from 'react-native'
import CardNumberTextInput from './CardNumberTextInput'
import { COLORS } from '../../../utills/Colors'
import TextComponent from '../../../utills/TextComponent'

const ExpireDateTextInput = () => {
    return (
        <View style={{ flexDirection: 'row' }}>
            {/* <CardNumberTextInput style={[styles.textInput, { width: 14, marginRight: 0 }]} inputsContaierStyle={styles.inputsContaierStyle} placeholder={'m'} placeholderTextColor={COLORS.PLACEHOLDER} isDate={false} /> */}
            {/* <TextComponent text={'/'} style={styles.line} />
            <CardNumberTextInput style={styles.textInput} inputsContaierStyle={styles.inputsContaierStyle} placeholder={'y'} placeholderTextColor={COLORS.PLACEHOLDER} isDate={true} /> */}
        </View>
    )
}

export default ExpireDateTextInput

const styles = StyleSheet.create({
    textInput: {
        borderBottomWidth: 0,
        borderBottomColor: COLORS.TEXTINPUT_BG,
    },
    inputsContaierStyle: {
        justifyContent: null,
        width: 28,
        marginRight: 0,
    },
    line: {
        color: COLORS.PLACEHOLDER,
        fontSize: 18,
        marginHorizontal: 1
    }
})