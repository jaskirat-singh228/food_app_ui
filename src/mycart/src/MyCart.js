import { FlatList, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TextComponent from '../../utills/TextComponent'
import { COLORS } from '../../utills/Colors'
import { LISTS } from '../../utills/Lists'
import ButtonComponent from '../../utills/ButtonComponent'
import ImageComponent from '../../utills/ImageComponent'
import { IMAGES } from '../../utills/Images'
import { useNavigation } from '@react-navigation/native'
import TextInputComponent from '../../utills/TextInputComponent'
import CommonButton from '../../utills/CommonButton'

const MyCart = () => {
  const navigation = useNavigation();
  const popular = LISTS?.popular;
  const [isEdit, setIsEdit] = useState(false)

  const renderList = ({ item, index }) => {
    return (
      <View style={[styles.listView, { marginTop: index == 0 ? 80 : 40 }]}>
        <View style={{ height: '100%', width: '48%' }}>
          <View style={styles.imagesView} />
        </View>
        <View style={styles.detailView}>
          <View style={{ flexDirection: 'row' }}>
            <Text numberOfLines={2} style={styles.nameText}>{item.name}</Text>
            {isEdit &&
              <TouchableOpacity>
                <ImageComponent source={IMAGES.CART_CANCEL} />
              </TouchableOpacity>
            }
          </View>
          <Text numberOfLines={2} style={styles.prizeText}>{item.prize}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Text style={[styles.nameText, { color: COLORS.SUB_TITLE, width: '50%' }]}>{item.size}</Text>
            <View style={styles.addRemoveView}>
              <ImageComponent source={IMAGES.CART_REMOVE} />
              <TextComponent text={'1'} style={styles.countText} />
              <ImageComponent source={IMAGES.CART_ADD} />
            </View>
          </View>
        </View>
      </View>
    )
  }

  return (
    <>
      <View style={styles.bottomView}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
          <TextComponent text={'DELIVERY ADDRESS'} style={styles.deliveryAddressText} />
          <ButtonComponent title={'EDIT'} textStyle={styles.editItemsText} />
        </View>
        <TextInputComponent placeholder={'2118 Thornridge Cir. Syracuse'} placeholderTextColor={COLORS.COMMON_GRAY} />
        <View style={styles.totalAndBreakdownView}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextComponent text={'TOTAL:'} style={[styles.deliveryAddressText, { color: COLORS.PLACEHOLDER }]} />
            <TextComponent text={'$TOTAL'} style={styles.totalNumberText} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <ButtonComponent title={'Breakdown'} textStyle={[styles.deliveryAddressText, { color: COLORS.ACTIVE_INDICATOR, paddingHorizontal: 5 }]} />
            <ImageComponent source={IMAGES.CART_RIGHT_ARROW} />
          </View>
        </View>
        <CommonButton onPress={() => navigation.navigate('PaymentMethod')} title='PLACE ORDER' />
      </View>
      <SafeAreaView style={styles.mainView}>
        <View style={styles.topView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ImageComponent source={IMAGES.CART_BACK} />
          </TouchableOpacity>
          <ButtonComponent onPress={() => setIsEdit(!isEdit)} title={isEdit ? 'DONE' : 'EDIT ITEMS'} textStyle={[styles.editItemsText, { color: isEdit ? COLORS.DONE : COLORS.ACTIVE_INDICATOR, textDecorationLine: 'underline', }]} />
        </View>
        <View style={styles.childView}>
          <FlatList
          style={{marginBottom:279}}
            data={popular}
            renderItem={renderList}
            keyExtractor={( item ) => item?.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </>
  )
}

export default MyCart

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.ADD_PRODUCT
  },
  childView: {
    flex: 1,
    backgroundColor: COLORS.ADD_PRODUCT,
    marginHorizontal: 24,
  },
  topView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1000,
    top: Platform.OS=='android'?0:59,
    paddingHorizontal: 24,
    backgroundColor: COLORS.ADD_PRODUCT
  },
  editItemsText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    color: COLORS.ACTIVE_INDICATOR,
    textDecorationLine: 'underline',
    width: 80,
    textAlign: 'right'
  },
  listView: {
    height: 117,
    width: '100%',
    flexDirection: 'row',
    marginTop: 40,
  },
  imagesView: {
    height: '100%',
    width: 136,
    borderRadius: 25,
    backgroundColor: COLORS.SUB_TITLE,
    opacity: 0.2,
  },
  detailView: {
    height: '100%',
    width: '52%',
    justifyContent:'center'
  },
  nameText: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 21.66,
    color: COLORS.MAIN_BG,
    width: '85%'
  },
  prizeText: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24.06,
    color: COLORS.MAIN_BG,
    width: '80%',
    marginVertical: 12
  },
  addRemoveView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 90
  },
  countText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19.25,
    color: COLORS.MAIN_BG,
  },
  bottomView: {
    backgroundColor: COLORS.MAIN_BG,
    height: 310,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    zIndex: 100,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    padding: 24
  },
  deliveryAddressText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    color: COLORS.PLACEHOLDER
  },
  totalAndBreakdownView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  totalNumberText: {
    fontSize: 30,
    fontWeight: '400',
    lineHeight: 36.09,
    paddingHorizontal: 15
  },
})