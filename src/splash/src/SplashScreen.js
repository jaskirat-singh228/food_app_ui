import { View, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../utills/Colors';
import SafeAreaViewComponent from '../../utills/SafeAreaViewComponent';
import ImageComponent from '../../utills/ImageComponent';
import { IMAGES } from '../../utills/Images';

const SplashScreen = () => {
  const [showEllipse1, setShowEllipse1] = useState(false);
  const [showEllipse2, setShowEllipse2] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setShowEllipse1(true);
    }, 1000);

    setTimeout(() => {
      setShowEllipse2(true);
    }, 1100);

    setTimeout(() => {
      navigation.replace('OnboardingScreen');
    }, 3000);
  }, [navigation]);

  return (
    <SafeAreaViewComponent children={
      <>
        {showEllipse1 && (
          <View style={{ position: 'absolute', alignSelf: 'flex-start',top:0 }}>
            <ImageComponent source={IMAGES.ELLIPSE1} />
          </View>
        )}
        <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
          <ImageComponent source={IMAGES.LOGO} />
        </View>
        {showEllipse2 && (
          <View style={{ alignSelf: 'flex-end', position: 'absolute', bottom: 0 }}>
            <ImageComponent source={IMAGES.ELLIPSE2} />
          </View>
        )}
      </>
    }
    />
  );
};

export default SplashScreen

const styles = StyleSheet.create({
  ellipse1: {
    height: 200,
    width: 200
  },

})
