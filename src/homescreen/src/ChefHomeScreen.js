import { FlatList, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import SafeAreaViewComponent from '../../utills/SafeAreaViewComponent'
import CommonViewComponent from '../../utills/CommonViewComponent'
import ImageComponent from '../../utills/ImageComponent'
import TextComponent from '../../utills/TextComponent'
import { IMAGES } from '../../utills/Images'
import { COLORS } from '../../utills/Colors'
import ChefCommonTopButton from './components/ChefCommonTopButton'
import { LISTS } from '../../utills/Lists'
import { Modalize } from 'react-native-modalize'
import CommonButton from '../../utills/CommonButton'
import { useIsFocused, useNavigation } from '@react-navigation/native'

const ChefHomeScreen = () => {
  const navigation = useNavigation();
  const chefTimeList = LISTS.chefTimeList;
  const runningOrders = LISTS.runningOrders;
  const reviewList = LISTS.reviewList;
  const modalizeRef = useRef(null);
  const focus = useIsFocused();

  useEffect(() => {
  }, [focus, runningOrders, modalizeRef])


  const renderTimeList = ({ item }) => {
    return (
      <TextComponent text={item.time} style={styles.time} onPress={() => console.log('button pressed')} />
    )
  }

  const renderPopularItems = ({ item }) => {
    return (
      <View style={styles.popularItems} />
    )
  }

  const handleTopButtonPress = (event) => {
    modalizeRef.current?.open(); // Open the modal

    const nativeEvent = { ...event.nativeEvent }; // Clone the nativeEvent object

    console.log(nativeEvent); // Log the event details immediately

    // Simulate an asynchronous operation
    setTimeout(() => {
      console.log("Accessing event properties after timeout:", nativeEvent); // Access the copied event properties
    }, 1000);
  };

  return (
    <SafeAreaViewComponent style={{ backgroundColor: COLORS.CHEF_HOME_BG }} children={
      <>
        <CommonViewComponent style={{ backgroundColor: COLORS.CHEF_HOME_BG }} children={
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.topView}>
              <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                  <ImageComponent source={IMAGES.CHEF_HOME_MENU} />
                </TouchableOpacity>
                <View style={styles.locationView}>
                  <TextComponent text='LOCATION' style={styles.locationText} />
                  <TouchableOpacity style={styles.halalButton}>
                    <TextComponent text='Halal Lab office' style={styles.halalLabOffice} />
                    <ImageComponent source={IMAGES.DOWN_ARROW} />
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('MyCart')} >
                <View style={styles.topImageView} />
              </TouchableOpacity>
            </View>
            <View style={styles.topButtonsView}>
              <TouchableOpacity onPress={handleTopButtonPress} style={styles.topButtons}>
                <TextComponent text={`${runningOrders.length < 10 ? '0' : ''}${runningOrders.length}`} style={styles.runningOredersNumber} />
                <TextComponent text={'Running Orders'} style={[styles.runningOredersNumber, { fontSize: 13, color: COLORS.RUNNING_ORDERS, marginTop: 5 }]} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.topButtons}>
                <TextComponent text={'05'} style={styles.runningOredersNumber} />
                <TextComponent text={'Order Request'} style={[styles.runningOredersNumber, { fontSize: 13, color: COLORS.RUNNING_ORDERS, marginTop: 5 }]} />
              </TouchableOpacity>
            </View>
            <View style={styles.totalRevenueView}>
              <ChefCommonTopButton title={'Total Revenue'} buttonTitle={'See Details'} />
              <TextComponent text={'$2,241'} style={styles.paymentNumber} />
              <View style={{ width: '100%', height: 90, backgroundColor: COLORS.COMMON_GRAY, marginTop: 15 }}>
              </View>
              <FlatList
                data={chefTimeList}
                renderItem={renderTimeList}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
              />
            </View>
            <View style={styles.reviewView}>
              <ChefCommonTopButton title={'Reviews'} buttonTitle={'See All Reviews'} onPress={() => navigation.navigate('Reviews')} />
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                <ImageComponent source={IMAGES.CHEF_REVIEW_STAR} />
                <TextComponent text={'4.9'} style={styles.reviewNumber} />
                <TextComponent text={`Total ${reviewList.length < 10 ? '0' : ''}${reviewList.length} Reviews`} style={styles.totalReviewText} />
              </View>
            </View>
            <View style={styles.popularItemsView}>
              <ChefCommonTopButton title={'Populer Items This Weeks'} buttonTitle={'See All'} />
              <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={renderPopularItems}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.toString()}
              />
            </View>
          </ScrollView>
        } />
        <Modalize
          ref={modalizeRef}
          handlePosition='inside'
          modalStyle={styles.modlizeStyle}
          handleStyle={styles.indicatorStyle}
          snapPoint={665}
          modalHeight={665}
        >
          <View style={styles.modalChildView}>
            <TextComponent text={`${runningOrders.length < 10 ? '0' : ''}${runningOrders.length} Running Orders`} style={styles.runningOrdersText} />
            <View style={{ marginBottom: 80 }}>
              {runningOrders.map((item, index) => {
                return (
                  <View key={index} style={styles.listView}>
                    <View style={styles.popularItemImageView} />
                    <View style={styles.itemDetailsContainer}>
                      <TextComponent text={item?.type} style={styles.type} />
                      <TextComponent text={item?.name} style={[styles.type, { fontWeight: '700', color: COLORS.PROFILE_INFO_LIST_TITLE, marginVertical: 5 }]} />
                      <TextComponent text={item?.itemId} style={[styles.type, { color: COLORS.PLACEHOLDER }]} />
                      <View style={styles.buttonsContainer}>
                        <TextComponent text={item.prize} style={[styles.type, { fontSize: 18, color: COLORS.PROFILE_INFO_LIST_TITLE, lineHeight: 20 }]} />
                        <View style={{ flexDirection: 'row' }}>
                          <CommonButton style={{ width: 61, height: 36, borderRadius: 10, marginTop: 0 }} title={'DONE'} />
                          <CommonButton style={styles.cancelButton} title={'CANCEL'} titleStyle={{ color: '#FF3326' }} />
                        </View>
                      </View>
                    </View>
                  </View>
                )
              })}
            </View>
          </View>
        </Modalize>
      </>
    } />
  )
}

export default ChefHomeScreen

const styles = StyleSheet.create({
  topView: {
    height: 49,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  locationView: {
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  locationText: {
    color: COLORS.ACTIVE_INDICATOR,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14.44
  },
  halalButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  halalLabOffice: {
    fontSize: '400',
    fontSize: 14,
    lineHeight: 16.84,
    color: COLORS.HALAL_LAB_OFFICE,
    paddingRight: 10
  },
  topImageView: {
    height: 45,
    width: 45,
    backgroundColor: COLORS.COMMON_GRAY,
    borderRadius: 200
  },
  topButtonsView: {
    width: '100%',
    height: 115,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS == 'android' ? 20 : 25
  },
  topButtons: {
    height: Platform.OS == 'android' ? 130 : 120,
    width: 165,
    borderRadius: 20,
    backgroundColor: COLORS.MAIN_BG,
    paddingHorizontal: 16,
    paddingVertical: 14
  },
  runningOredersNumber: {
    fontSize: 52.32,
    fontWeight: '700',
    color: COLORS.TITLE
  },
  totalRevenueView: {
    height: 204,
    width: '100%',
    borderRadius: 20,
    backgroundColor: COLORS.MAIN_BG,
    marginTop: Platform.OS == 'android' ? 40 : 25,
    padding: 16
  },
  paymentNumber: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 30,
    color: COLORS.PROFILE_INFO_LIST_TITLE
  },
  time: {
    fontSize: 9,
    fontWeight: '400',
    lineHeight: 10.83,
    color: COLORS.PLACEHOLDER,
    marginRight: 32.5,
    marginTop: 8
  },
  reviewView: {
    height: 94.18,
    width: '100%',
    backgroundColor: COLORS.MAIN_BG,
    marginTop: 25,
    borderRadius: 20,
    padding: 16
  },
  reviewNumber: {
    fontWeight: '700',
    fontSize: 21.8,
    color: COLORS.ACTIVE_INDICATOR
  },
  totalReviewText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.84,
    color: COLORS.PROFILE_INFO_LIST_TITLE,
    marginLeft: 15
  },
  popularItemsView: {
    backgroundColor: COLORS.MAIN_BG,
    height: 220,
    width: '100%',
    borderRadius: 20,
    marginTop: 25,
    padding: 16,
    marginBottom: 75
  },
  popularItems: {
    height: 150,
    width: 153,
    borderRadius: 20,
    backgroundColor: COLORS.COMMON_GRAY,
    marginRight: 12,
    marginTop: 15
  },
  modlizeStyle: {
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    backgroundColor: COLORS.MAIN_BG,
  },
  indicatorStyle: {
    top: 8,
    width: 70,
    height: 7,
    backgroundColor: COLORS.MODAL_INDICATOR_BG
  },
  modalChildView: {
    marginTop: 30,
    paddingHorizontal: 24,
    marginBottom: 30
  },
  runningOrdersText: {
    fontWeight: '400',
    fontSize: 17,
    color: COLORS.PROFILE_INFO_LIST_TITLE,
    lineHeight: 22
  },
  listView: {
    height: 103,
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
  },
  popularItemImageView: {
    height: 102,
    width: 102,
    backgroundColor: COLORS.COMMON_GRAY,
    borderRadius: 20,
  },
  itemDetailsContainer: {
    marginLeft: 15,
  },
  type: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.84,
    color: COLORS.RUNNING_TYPE
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '84%',
  },
  cancelButton: {
    width: 80,
    height: 36,
    backgroundColor: COLORS.MAIN_BG,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FF3326',
    marginTop: 0,
    marginLeft: 15,
    padding: 9
  }
})