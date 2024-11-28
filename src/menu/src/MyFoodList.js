import { FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SafeAreaViewComponent from '../../utills/SafeAreaViewComponent'
import CommonViewComponent from '../../utills/CommonViewComponent'
import { useState } from 'react';
import BackButtonHeader from '../../utills/BackButtonHeader';
import TextComponent from '../../utills/TextComponent';
import { COLORS } from '../../utills/Colors';
import { LISTS } from '../../utills/Lists';
import ImageComponent from '../../utills/ImageComponent';
import { IMAGES } from '../../utills/Images';
import { useNavigation } from '@react-navigation/native';

const MyFoodList = () => {
  const [tab, setTab] = useState('All');
  const myfoodListAll = LISTS.myFoodListAll;
  const navigation = useNavigation();

  const renderAllFoods = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('ChefProductDetails', { item: item })} style={styles.listView}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.imageView} />
          <View style={{ marginLeft: 10 }}>
            <TextComponent text={item.name} style={styles.nameText} />
            <View style={styles.typeView}>
              <TextComponent text={item.type} style={styles.typeText} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <ImageComponent source={IMAGES.CHEF_REVIEW_STAR} style={{ height: 20, width: 20 }} />
              <TextComponent text={item.rating} style={styles.notificationsText} />
              <TextComponent text={item.reviews} style={[styles.totalItemsText, { marginLeft: 10, marginVertical: 0 }]} />
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity>
            <ImageComponent source={IMAGES.DOTS} style={{height:45,width:20}} />
          </TouchableOpacity>
          <TextComponent text={item.prize} style={[styles.nameText, { marginBottom: 10 }]} />
          <TextComponent text={'Pick UP'} style={[styles.totalItemsText, { marginVertical: 0 }]} />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaViewComponent children={
      <>
        <View style={styles.indicatorBgView} />
        <CommonViewComponent children={
          <>
            <BackButtonHeader title={tab ? 'My Food List' : 'Messages'} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, width: '100%', }}>
              <TouchableOpacity onPress={() => setTab('All')} style={{ width: '10%', alignItems: 'center' }}>
                <TextComponent text={'All'} style={[styles.notificationsText, { color: tab == 'All' ? COLORS.ACTIVE_INDICATOR : COLORS.PLACEHOLDER, fontWeight: tab == 'All' ? '700' : '400' }]} />
                {tab == 'All' ? <View style={styles.indicatorView} /> : null}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setTab('Breakfast')} style={{ width: '25%', alignItems: 'center' }}>
                <TextComponent text={'Breakfast'} style={[styles.notificationsText, { color: tab == 'Breakfast' ? COLORS.ACTIVE_INDICATOR : COLORS.PLACEHOLDER, fontWeight: tab == 'Breakfast' ? '700' : '400' }]} />
                {tab == 'Breakfast' ? <View style={styles.indicatorView} /> : null}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setTab('Lunch')} style={{ width: '20%', alignItems: 'center' }}>
                <TextComponent text={'Lunch'} style={[styles.notificationsText, { color: tab == 'Lunch' ? COLORS.ACTIVE_INDICATOR : COLORS.PLACEHOLDER, fontWeight: tab == 'Lunch' ? '700' : '400' }]} />
                {tab == 'Lunch' ? <View style={styles.indicatorView} /> : null}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setTab('Dinner')} style={{ width: '20%', alignItems: 'center' }}>
                <TextComponent text={'Dinner'} style={[styles.notificationsText, { color: tab == 'Dinner' ? COLORS.ACTIVE_INDICATOR : COLORS.PLACEHOLDER, fontWeight: tab == 'Dinner' ? '700' : '400' }]} />
                {tab == 'Dinner' ? <View style={styles.indicatorView} /> : null}
              </TouchableOpacity>
            </View>
            {tab == 'All' ? (
              <>
                <TextComponent text={`Total ${myfoodListAll.length < 10 ? '0' : ''}${myfoodListAll.length} items`} style={styles.totalItemsText} />
                <FlatList
                  data={myfoodListAll}
                  renderItem={renderAllFoods}
                  keyExtractor={(item) => item.id.toString()}
                  showsVerticalScrollIndicator={false}
                />
              </>
            ) : null}
          </>
        } />
      </>
    } />
  )
}

export default MyFoodList

const styles = StyleSheet.create({
  notificationsText: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16.84,
    color: COLORS.ACTIVE_INDICATOR,
    alignSelf: 'center'
  },
  indicatorView: {
    height: 2,
    width: 47,
    backgroundColor: COLORS.ACTIVE_INDICATOR,
    marginTop: 15,
    borderRadius:200
  },
  indicatorBgView: {
    height: 0.5,
    width: '100%',
    backgroundColor: COLORS.PLACEHOLDER,
    position: 'absolute',
    top: Platform.OS=='android'?132:166.5,
    zIndex: 1000,
    opacity: 0.5
  },
  totalItemsText: {
    fontWeight: '400',
    fontSize: 14,
    color: COLORS.PLACEHOLDER,
    lineHeight: 16.84,
    marginVertical: 20
  },
  listView: {
    height: 102,
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageView: {
    height: 102,
    width: 102,
    borderRadius: 20,
    backgroundColor: COLORS.COMMON_GRAY,
  },
  typeText: {
    fontWeight: '400',
    fontSize: 13,
    color: COLORS.ACTIVE_INDICATOR,
  },
  typeView: {
    backgroundColor: COLORS.INACTIVE_INDICATOR,
    width: 85,
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    marginVertical: 10
  },
  nameText: {
    fontWeight: '700',
    fontSize: 14,
    color: COLORS.PROFILE_INFO_LIST_TITLE,
    lineHeight: 16.84,
  },
})