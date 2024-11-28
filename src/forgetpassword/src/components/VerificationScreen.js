import { StyleSheet, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import BackButtonComponent from '../../../utills/BackButtonComponent'
import SafeAreaViewComponent from '../../../utills/SafeAreaViewComponent'
import CommonHeader from '../../../utills/CommonHeader'
import TextComponent from '../../../utills/TextComponent'
import TextInputComponent from '../../../utills/TextInputComponent'
import ButtonComponent from '../../../utills/ButtonComponent'
import { COLORS } from '../../../utills/Colors'
import CommonButton from '../../../utills/CommonButton'

const VerificationScreen = () => {
  const navigation = useNavigation()
  const route = useRoute();
  const childView = route.params?.childView;
  const email = route.params?.email;

  const [time, setTime] = useState(60);
  const [value, setValue] = useState(Array(4).fill(''));
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    if (time === 0) return;
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [time]);

  const onPressVerify = () => {
    if (value.every((value) => value !== '')) {
      navigation.navigate('LocationaccessScreen', { childView });
    }
  }

  const handleInputChange = (text, index) => {
    const newValue = [...value];
    newValue[index] = text;
    setValue(newValue);

    if (text && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    } else if (!text && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <SafeAreaViewComponent children={
      <>
        <BackButtonComponent />
        <CommonHeader title={'Verification'} subTitle={'We have sent a code to your email'} email={'email@gmail.com'} />
        <View style={childView}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <TextComponent text={'CODE'} style={email} />
            <View style={{ flexDirection: 'row' }}>
              <View style={{ borderBottomWidth: 1, borderBottomColor: COLORS.TITLE }}>
                <TextComponent text={'Resend'} style={styles.resend} />
              </View>
              <TextComponent text={` in.${time}sec`} style={[styles.resend, { fontWeight: '400' }]} />
            </View>
          </View>
          <View style={styles.inputsContaier}>
            {value.map((_, index) => (
              <TextInputComponent
                key={index}
                style={styles.textInput}
                placeholder='0'
                placeholderTextColor={COLORS.PLACEHOLDER}
                ref={inputRefs[index]}
                onChangeText={(text) => handleInputChange(text, index)}
                maxLength={1}
                keyboardType='number-pad'
              />
            ))}
          </View>
          <CommonButton title={'VERIFY'} onPress={() => onPressVerify()} style={{
            backgroundColor: value.every((char) => char !== '')
              ? COLORS.ACTIVE_INDICATOR
              : COLORS.INACTIVE_INDICATOR,
          }} />
        </View>
      </>
    }
    />
  )
}

export default VerificationScreen

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.MAIN_BG
  },
  verifyButton: {
    backgroundColor: COLORS.ACTIVE_INDICATOR,
    paddingHorizontal: 147,
    paddingVertical: 20,
    borderRadius: 12,
    marginVertical: 25
  },
  verifyButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.MAIN_BG,
  },
  value: {
    color: COLORS.TITLE,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 15.64,
  },
  inputsContaier: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  resend: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 16.84,
    color: COLORS.TITLE,
  },
  textInput: {
    backgroundColor: COLORS.TEXTINPUT_BG,
    fontSize: 16,
    color: COLORS.TITLE,
    borderRadius: 10,
    height: 62,
    width: 62,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 0,
  },
})