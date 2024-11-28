import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { COLORS } from '../../utills/Colors'
import ImageComponent from '../../utills/ImageComponent'
import TextComponent from '../../utills/TextComponent'
import TextInputComponent from '../../utills/TextInputComponent'
import SocialButton from '../../login/src/utills/SocialButton'
import CommonHeader from '../../utills/CommonHeader'
import SafeAreaViewComponent from '../../utills/SafeAreaViewComponent'
import { IMAGES } from '../../utills/Images'
import CommonButton from '../../utills/CommonButton'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaViewComponent children={
      <>
        <CommonHeader title={'Log In'} subTitle={'Please sign in to your existing account'} />
        <View style={styles.childView2}>
          <TextComponent text={'EMAIL'} style={styles.email} />
          <TextInputComponent placeholder={'Enter email'} placeholderTextColor={COLORS.PLACEHOLDER} />
          <TextComponent text={'PASSWORD'} style={styles.email} />
          <View style={styles.enterPasswordView}>
            <TextInput placeholder={'Enter password'} placeholderTextColor={COLORS.PLACEHOLDER} style={[styles.textInput, { width: '90%' }]} secureTextEntry={true} />
            <TouchableOpacity style={{ justifyContent: 'center' }}>
              <ImageComponent source={IMAGES.EYE} style={{ alignSelf: 'center', }} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => setIsChecked(!isChecked)}
                style={[styles.checkBoxView, { borderColor: isChecked ? COLORS.IS_CHECKED : COLORS.CHECKBOX }]}>
                {isChecked && (<ImageComponent source={IMAGES.CHECK} style={styles.check} />)}
              </TouchableOpacity>
              <TextComponent text={'Remember me'} style={styles.rememberMe} />
            </View>
            <TextComponent text={'Forgot Password'} style={styles.forgetPassword} onPress={() => navigation.navigate('ForgetpasswordScreen', { childView: styles.childView2 })} />
          </View>
          <CommonButton onPress={() => navigation.navigate('LocationaccessScreen')} title='Login' style={{ marginBottom: 40 }} />
          <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center', marginBottom: 40 }}>
            <TextComponent text={'Don’t have an account?'} style={styles.accountQuestion} />
            <TextComponent text={'SIGN UP'} style={styles.signup} onPress={() => navigation.navigate('SignupScreen', { childView: styles.childView2, email: styles.email })} />
          </View>
          <TextComponent text={'Or'} style={styles.or} />
          <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
            <SocialButton style={styles.socialButton} source={IMAGES.FACEBOOK} />
            <SocialButton style={[styles.socialButton, { backgroundColor: COLORS.TWITTER }]} source={IMAGES.TWITTER} />
            <SocialButton style={[styles.socialButton, { backgroundColor: COLORS.APPLE }]} source={IMAGES.APPLE} />
          </View>
        </View>
      </>
    }
    />
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  childView2: {
    flex: 0.75,
    backgroundColor: COLORS.MAIN_BG,
    borderTopLeftRadius: 24,
    marginTop: -20,
    borderTopRightRadius: 24,
    padding: 24
  },
  email: {
    color: COLORS.TITLE,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 15.64,
    marginBottom: 10
  },
  textInput: {
    backgroundColor: COLORS.TEXTINPUT_BG,
    height: 62,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 20,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.84,
    color: COLORS.TITLE,
    marginBottom: 30
  },
  enterPasswordView: {
    flexDirection: 'row',
    backgroundColor: COLORS.TEXTINPUT_BG,
    width: '100%',
    height: 62,
    borderRadius: 10,
    marginBottom: 30
  },
  checkBoxView: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  check: {
    marginLeft: 7,
    marginBottom: 7,
    height: 23,
    width: 23,
    tintColor: COLORS.IS_CHECKED
  },
  rememberMe: {
    color: COLORS.REMEMBER_ME,
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 15.64,
    paddingHorizontal: 10
  },
  forgetPassword: {
    color: COLORS.ACTIVE_INDICATOR,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.84
  },
  accountQuestion: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.SUB_TITLE
  },
  signup: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16.84,
    paddingHorizontal: 10,
    color: COLORS.ACTIVE_INDICATOR
  },
  or: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19.25,
    alignSelf: 'center',
    color: COLORS.SUB_TITLE,
    marginBottom: 20
  },
  socialButton: {
    backgroundColor: COLORS.FACEBOOK,
    height: 62,
    width: 62,
    borderRadius: 510,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
})