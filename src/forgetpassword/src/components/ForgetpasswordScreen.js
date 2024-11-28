import { StyleSheet,  View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import SafeAreaViewComponent from '../../../utills/SafeAreaViewComponent';
import CommonHeader from '../../../utills/CommonHeader';
import BackButtonComponent from '../../../utills/BackButtonComponent';
import TextComponent from '../../../utills/TextComponent';
import TextInputComponent from '../../../utills/TextInputComponent';
import { COLORS } from '../../../utills/Colors';
import CommonButton from '../../../utills/CommonButton';

const ForgetpasswordScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const childView = route.params?.childView;

  return (
    <SafeAreaViewComponent children={
      <>
        <CommonHeader title={'Forgot Password'} subTitle={'Please sign in to your existing account'} />
        <BackButtonComponent />
        <View style={childView}>
          <TextComponent text={'EMAIL'} style={styles.email} />
          <TextInputComponent placeholder={'Enter email'} placeholderTextColor={COLORS.PLACEHOLDER} />
          <CommonButton onPress={() => navigation.navigate('VerificationScreen', { childView: childView })} title='SEND CODE' style={{marginTop:0}} />
        </View>
      </>
    }
    />
  )
}

export default ForgetpasswordScreen

const styles = StyleSheet.create({
  email: {
    color: COLORS.TITLE,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 15.64,
    marginBottom: 10
  },
})