import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SafeAreaViewComponent from '../../utills/SafeAreaViewComponent'
import CommonViewComponent from '../../utills/CommonViewComponent'
import ImageComponent from '../../utills/ImageComponent'
import TextComponent from '../../utills/TextComponent'
import { IMAGES } from '../../utills/Images'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../../utills/Colors'
import TextInputComponent from '../../utills/TextInputComponent'
import { LISTS } from '../../utills/Lists'

const DeliveryManChatScreen = () => {
  const navigation = useNavigation();
  const message = LISTS.message;

  const renderMessages = ({ item }) => {
    return (
      <View style={{ alignItems: item.senderId == 123 ? 'flex-end' : 'flex-start' }}>
        {item.senderId == 123 ?
          (<View style={{ marginTop: 30, }}>
            <TextComponent text={item.time} style={{ color: COLORS.DELIVERYMAN_CHAT_PLACEHOLDER, marginLeft: 30 }} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <ImageComponent source={IMAGES.MESSAGE_SEEN} />
              <View style={styles.senderMessagesView}>
                <TextComponent text={item.message} style={styles.message} />
              </View>
              <View style={styles.userImage} />
            </View>
          </View>)
          :
          (<View style={{ marginTop: 30, }}>
            <TextComponent text={item.time} style={{ color: COLORS.DELIVERYMAN_CHAT_PLACEHOLDER, alignSelf: 'flex-end' }} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={[styles.userImage, { marginLeft: 0, marginRight: 10, backgroundColor: COLORS.COMMON_GRAY }]} />
              <View style={[styles.senderMessagesView, { marginLeft: 0, backgroundColor: COLORS.TEXTINPUT_BG }]}>
                <TextComponent text={item.message} style={[styles.message, { color: COLORS.TITLE }]} />
              </View>
            </View>
          </View>)
        }
      </View>
    )
  }

  return (
    <SafeAreaViewComponent children={
      <CommonViewComponent children={
        <>
          <View style={{ flex: 0.93 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ImageComponent source={IMAGES.CANCEL} />
              </TouchableOpacity>
              <TextComponent text={'Robert Fox'} style={styles.deliveryManNameText} />
            </View>
            <View style={{ height: '93.5%', justifyContent: 'flex-end' }} >
              <FlatList
                data={message}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderMessages}
              />
            </View>
          </View>
          <View style={{ flex: 0.07 }}>
            <View style={styles.textInputView}>
              <TouchableOpacity style={{ width: '8%', justifyContent: 'center' }}>
                <ImageComponent source={IMAGES.SMILE} />
              </TouchableOpacity>
              <View style={{ width: '80%', justifyContent: 'center' }}>
                <TextInputComponent placeholder={'Write somethings'} placeholderTextColor={COLORS.DELIVERYMAN_CHAT_PLACEHOLDER} style={styles.textInput} />
              </View>
              <TouchableOpacity style={{ width: '13%', justifyContent: 'center' }}>
                <ImageComponent source={IMAGES.SEND} />
              </TouchableOpacity>
            </View>
          </View>
        </>
      } />
    } />
  )
}

export default DeliveryManChatScreen

const styles = StyleSheet.create({
  deliveryManNameText: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
    paddingHorizontal: 20
  },
  textInputView: {
    flexDirection: 'row',
    height: 62,
    backgroundColor: COLORS.TEXTINPUT_BG,
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 10,
    justifyContent: 'center',
    width: '100%'
  },
  textInput: {
    borderRadius: 0,
    padding: 10,
    fontSize: 12,
    color: COLORS.TITLE,
    marginBottom: 0,
  },
  senderMessagesView: {
    alignItems: 'center',
    height: 51,
    backgroundColor: COLORS.ACTIVE_INDICATOR,
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 10
  },
  message: {
    color: COLORS.MAIN_BG,
    fontSize: 14,
    fontWeight: '400',
  },
  userImage: {
    height: 40,
    width: 40,
    borderRadius: 200,
    backgroundColor: COLORS.INACTIVE_INDICATOR,
    marginLeft: 10
  }
})