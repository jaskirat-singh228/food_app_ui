import { StyleSheet, TouchableOpacity, View } from 'react-native'
import ImageComponent from '../../utills/ImageComponent'
import TextComponent from '../../utills/TextComponent'
import { IMAGES } from '../../utills/Images'
import { useNavigation } from '@react-navigation/native'
import SafeAreaViewComponent from '../../utills/SafeAreaViewComponent'
import CommonViewComponent from '../../utills/CommonViewComponent'
import TextInputComponent from '../../utills/TextInputComponent'
import { COLORS } from '../../utills/Colors'
import ButtonComponent from '../../utills/ButtonComponent'
import CardNumberTextInput from './components/CardNumberTextInput'
import CommonButton from '../../utills/CommonButton'
import ExpireDateTextInput from './components/ExpireDateTextInput'

const AddCard = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaViewComponent children={
            <CommonViewComponent children={
                <>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <ImageComponent source={IMAGES.CANCEL} />
                        </TouchableOpacity>
                        <TextComponent text={'Add Card'} style={styles.addCardText} />
                    </View>
                    <TextComponent text={'CARD HOLDER NAME'} style={styles.cardHolderNameText} />
                    <TextInputComponent placeholder={'Enter name'} placeholderTextColor={COLORS.PLACEHOLDER} style={{ marginBottom: 10 }} />
                    <TextComponent text={'CARD NUMBER'} style={[styles.cardHolderNameText, { marginTop: 0 }]} />
                    <View style={styles.cardNumberTextInputsMainView}>
                        <CardNumberTextInput />
                        {/* <CardNumberTextInput /> */}
                        {/* <CardNumberTextInput /> */}
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <View style={{ width: '45%' }}>
                            <TextComponent text={'EXPIRE DATE'} style={[styles.cardHolderNameText, { marginTop: 0, width: '100%' }]} />
                            <View style={styles.cardNumberTextInputsMainView}>
                                <ExpireDateTextInput />
                            </View>
                            {/* <TextInputComponent placeholder={''} placeholderTextColor={COLORS.PLACEHOLDER} style={{ marginBottom: 10 }} /> */}
                        </View>
                        <View style={{ width: '45%' }}>
                            <TextComponent text={'CVC'} style={[styles.cardHolderNameText, { marginTop: 0, width: '100%' }]} />
                            <TextInputComponent placeholder={'Enter CVC'} placeholderTextColor={COLORS.PLACEHOLDER} style={{ marginBottom: 10 }} secureTextEntry={true} />
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <CommonButton onPress={() => navigation.goBack()} title='ADD & MAKE PAYMENT' />
                    </View>
                </>
            } />
        } />
    )
}

export default AddCard

const styles = StyleSheet.create({
    addCardText: {
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22,
        paddingHorizontal: 20,
        color:COLORS.TITLE
    },
    cardHolderNameText: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 24,
        color: COLORS.PLACEHOLDER,
        marginTop: 15,
        paddingVertical: 10
    },
    loginButton: {
        backgroundColor: COLORS.ACTIVE_INDICATOR,
        paddingHorizontal: 92,
        paddingVertical: 20,
        borderRadius: 12,
        marginTop: 30,
    },
    loginButtonText: {
        fontSize: 14,
        fontWeight: '700',
        color: COLORS.MAIN_BG,
    },
    cardNumberTextInputsMainView: {
        backgroundColor: COLORS.TEXTINPUT_BG,
        height: 62,
        width: '100%',
        borderRadius: 10,
        padding: 20,
        marginBottom: 15,
        flexDirection: 'row',
    }
})