import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import SafeAreaViewComponent from '../../utills/SafeAreaViewComponent'
import CommonHeader from '../../utills/CommonHeader'
import BackButtonComponent from '../../utills/BackButtonComponent'
import { useNavigation, useRoute } from '@react-navigation/native'
import TextComponent from '../../utills/TextComponent'
import TextInputComponent from '../../utills/TextInputComponent'
import ButtonComponent from '../../utills/ButtonComponent'
import { COLORS } from '../../utills/Colors'
import ImageComponent from '../../utills/ImageComponent'
import { IMAGES } from '../../utills/Images'
import CommonButton from '../../utills/CommonButton'

const SignupScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const childView = route.params?.childView;
  const email = route.params?.email;
  const [seePassword, setSeePassword] = useState(false);
  return (
    <SafeAreaViewComponent children={
      <>
        <BackButtonComponent />
        <CommonHeader title='Sign Up' subTitle='Please sign up to get started' />
        <View style={childView}>
          <TextComponent text={'NAME'} style={email} />
          <TextInputComponent placeholder={'Enter name'} placeholderTextColor={COLORS.PLACEHOLDER} />
          <TextComponent text={'EMAIL'} style={email} />
          <TextInputComponent placeholder={'Enter email'} placeholderTextColor={COLORS.PLACEHOLDER} />
          <TextComponent text={'PASSWORD'} style={email} />
          <View style={styles.enterPasswordView}>
            <TextInput placeholder={'Enter password'} placeholderTextColor={COLORS.PLACEHOLDER} style={[styles.textInput, { width: '90%' }]} secureTextEntry={true} />
            <TouchableOpacity onPress={() => setSeePassword(!seePassword)} style={{ alignSelf: 'center', }}>
              {seePassword ? (<ImageComponent source={IMAGES.EYE} style={{ alignSelf: 'center' }} />)
                // height: 12, width: 16 
                : (<ImageComponent source={IMAGES.EYE_OFF} style={{ alignSelf: 'center', }} />)}
            </TouchableOpacity>
          </View>
          <TextComponent text={'RE-TYPE PASSWORD'} style={email} />
          <View style={[styles.enterPasswordView, { marginBottom: 50 }]}>
            <TextInput placeholder={'Enter password'} placeholderTextColor={COLORS.PLACEHOLDER} style={[styles.textInput, { width: '90%' }]} secureTextEntry={true} />
            <TouchableOpacity onPress={() => setSeePassword(!seePassword)} style={{ alignSelf: 'center', }}>
              {seePassword ? (<ImageComponent source={IMAGES.EYE} style={{ alignSelf: 'center' }} />)
                : (<ImageComponent source={IMAGES.EYE_OFF} style={{ alignSelf: 'center', }} />)}
            </TouchableOpacity>
          </View>
          <CommonButton onPress={() => navigation.navigate('LocationaccessScreen')} title='SIGN UP' style={{marginTop:0}} />
        </View>
      </>
    } />
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  enterPasswordView: {
    flexDirection: 'row',
    backgroundColor: COLORS.TEXTINPUT_BG,
    width: '100%',
    height: 62,
    borderRadius: 10,
    marginBottom: 30
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
})