import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import SafeAreaViewComponent from '../../utills/SafeAreaViewComponent'
import ButtonComponent from '../../utills/ButtonComponent'
import { COLORS } from '../../utills/Colors'
import TextComponent from '../../utills/TextComponent'
import ImageComponent from '../../utills/ImageComponent'
import { useNavigation } from '@react-navigation/native'
import CommonViewComponent from '../../utills/CommonViewComponent'
import { IMAGES } from '../../utills/Images'
import CommonButton from '../../utills/CommonButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'

const LocationaccessScreen = () => {
  const navigation = useNavigation();
  const [isSelected, setIsSelected] = useState('');

  useEffect(() => {
    getIseSelected();
  }, [])

  const getIseSelected = async () => {
    try {
      const value = await AsyncStorage.getItem('isSelected');
      if (value !== null) {
        console.log(value, 'huhibiuuhiboijnn');
        setIsSelected(value)
      }
    } catch (error) {
      console.log(error,);
    }
  };

  const handlePress = () => {
    if (isSelected == 'User Login') {
      navigation.navigate('DrawerNavigation')
    } else {
      navigation.navigate('ChefDrawerNavigation')
      // navigation.navigate('BottomNavigation')
    }
  }

  return (
    <SafeAreaViewComponent children={
      <CommonViewComponent children={
        <>
          <View style={styles.locationView}>
          </View>
          <TouchableOpacity onPress={handlePress} style={styles.accesLocationButtonView}>
            <CommonButton onPress={handlePress} title='ACCESS LOCATION' style={{ marginTop: 0, width: '45%', marginBottom: 0 }} />
            <ImageComponent source={IMAGES.MAP_PIN} style={{ marginHorizontal: 10 }} />
          </TouchableOpacity>
          <TextComponent text='DFOOD WILL ACCESS YOUR LOCATION ONLY WHILE USING THE APP' style={styles.textStyle} />
        </>
      }
      />
    } />
  )
}

export default LocationaccessScreen

const styles = StyleSheet.create({
  locationView: {
    height: 250,
    width: 206,
    borderRadius: 90,
    backgroundColor: COLORS.COMMON_GRAY,
    marginVertical: 70,
    alignSelf: 'center',
    marginTop: 120
  },
  accesLocationButtonView: {
    backgroundColor: COLORS.ACTIVE_INDICATOR,
    width: '100%',
    borderRadius: 12,
    marginVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1000,
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'center',
    marginHorizontal: 30,
    color: COLORS.SUB_TITLE,
  },
})