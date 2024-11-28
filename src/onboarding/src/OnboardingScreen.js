import { Dimensions, FlatList, Platform, StyleSheet, View } from 'react-native';
import React, { useRef, useState } from 'react';
import TextComponent from '../../utills/TextComponent';
import { useNavigation } from '@react-navigation/native';
import ImageComponent from '../../utills/ImageComponent';
import { COLORS } from '../../utills/Colors';
import SafeAreaViewComponent from '../../utills/SafeAreaViewComponent';
import { IMAGES } from '../../utills/Images';
import CommonButton from '../../utills/CommonButton';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const scrollItems = [
    {
      id: 1,
      image: IMAGES.FAV_FOOD,
      title: 'All your favorites',
    },
    {
      id: 2,
      image: IMAGES.CHEF,
      title: 'Order from choosen chef',
    },
    {
      id: 3,
      image: IMAGES.DELIVERY,
      title: 'Free delivery offers',
    },
  ]

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });
  const viewabilityConfig = { itemVisiblePercentThreshold: 100, };

  const renderList = ({ item }) => {
    return (
      <View style={styles.listContainer}>
        <ImageComponent source={item.image} style={styles.image} resizeMode={'cover'} />
        <TextComponent style={styles.title} text={item.title} />
        <TextComponent style={styles.subTitle} text='Get all your loved foods in one once place, you just place the orer we do the rest' />
      </View>
    )
  }

  const handlePress = () => {
    if (currentIndex < scrollItems.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current.scrollToIndex({ index: nextIndex });
      setCurrentIndex(nextIndex);
    } else {
      navigation.navigate('UserOrChef')
    }
  }

  const handleSkipPress = () => {
    const lastIndex = scrollItems.length - 1;
    flatListRef.current.scrollToIndex({ index: lastIndex });
    setCurrentIndex(lastIndex);
  };

  return (
    <SafeAreaViewComponent children={
          <>
            <View style={{}}>
              <FlatList
                ref={flatListRef}
                data={scrollItems}
                renderItem={renderList}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewabilityConfig}
              />
            </View>
            <View style={styles.indicatorView}>
              {scrollItems.map((item, index) => {
                return (<View key={item.id} style={[styles.indicator, { backgroundColor: currentIndex === index ? COLORS.ACTIVE_INDICATOR : COLORS.INACTIVE_INDICATOR }]} />)
              })}
            </View>
            <View style={styles.buttonContainer}>
              <CommonButton onPress={() => handlePress()} title={currentIndex == scrollItems.length - 1?'GET STARTED':'Next'} style={{marginBottom:currentIndex == scrollItems.length - 1?(Platform.OS=='android')?70:59:0}} />
              {currentIndex != scrollItems.length - 1 &&
                <TextComponent onPress={handleSkipPress} style={styles.skip} text={'Skip'} />}
            </View>
          </>
    }
    />
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 20,
    marginLeft: 5
  },
  listContainer: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 340,
    width: 275,
    borderRadius: 12,
    marginVertical: 55,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.TITLE
  },
  subTitle: {
    marginVertical: 25,
    textAlign: 'center',
    fontSize: 17,
    color: COLORS.SUB_TITLE,
    lineHeight: 24,
    marginHorizontal: 24,
    fontWeight: '400',
    backgroundColor:'red'
  },
  buttonContainer: {
    alignItems: 'center',
    paddingHorizontal:24,
    justifyContent:'flex-end'
  },
  skip: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19.25,
    color: COLORS.SUB_TITLE,
    marginVertical: Platform.OS=='android'?20:20,
    paddingHorizontal:20,
    marginBottom:Platform.OS=='android'?30:20
  },
  indicatorView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
})