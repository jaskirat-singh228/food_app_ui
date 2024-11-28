import { FlatList, Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SafeAreaViewComponent from '../../utills/SafeAreaViewComponent'
import BackButtonHeader from '../../utills/BackButtonHeader'
import { IMAGES } from '../../utills/Images'
import CommonViewComponent from '../../utills/CommonViewComponent'
import TextComponent from '../../utills/TextComponent'
import { COLORS } from '../../utills/Colors'
import { LISTS } from '../../utills/Lists'

const ChefNotifications = () => {
    const notifications = LISTS.notifications;
    const messages = LISTS.messages;
    const [tab, setTab] = useState('Notifications');

    const renderNotificationList = ({ item }) => {
        return (
            <View style={styles.listView}>
                <View style={styles.imageAndNameView}>
                    <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
                        <View style={styles.userImage} />
                        <View style={{ marginLeft: 20, width: 150 }}>
                            <TextComponent text={item.name} style={styles.userNameText} />
                            <TextComponent text={item.time} style={[styles.userNameText, { fontSize: 10, color: COLORS.PLACEHOLDER, marginTop: 5 }]} />
                        </View>
                    </View>
                    <View style={[styles.userImage, { borderRadius: 10 }]} />
                </View>
            </View>
        )
    }

    const renderMessagesList = ({ item }) => {
        return (
            <View style={[styles.listView, { height: 90 }]}>
                <View style={styles.imageAndNameView}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View>
                            <View style={[styles.userImage, { height: 32, width: 32 }]} />
                            <View style={styles.onlineView} />
                        </View>
                        <View style={{ marginLeft: 15 }}>
                            <TextComponent text={item.name} style={styles.userNameText} />
                            <TextComponent text={item.lastMessage} style={[styles.userNameText, { color: COLORS.PLACEHOLDER, marginTop: 5 }]} />
                        </View>
                    </View>
                    <TextComponent text={item.time} style={[styles.userNameText, { fontSize: 10, color: COLORS.PLACEHOLDER, marginTop: 5 }]} />
                </View>
            </View>
        )
    }

    return (
        <SafeAreaViewComponent children={
            <>
                <View style={styles.indicatorBgView} />
                <CommonViewComponent
                    children={
                        <>
                            <BackButtonHeader title={tab ? 'Notifications' : 'Messages'} isButton={true} isIcon={true} image={IMAGES.NAVIGATION_DOTS} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 60, width: '100%', }}>
                                <TouchableOpacity onPress={() => setTab('Notifications')} style={{ width: '45%' }}>
                                    <TextComponent text={'Notifications'} style={[styles.notificationsText, { color: tab == 'Notifications' ? COLORS.ACTIVE_INDICATOR : COLORS.PLACEHOLDER, fontWeight: tab == 'Notifications' ? '700' : '400' }]} />
                                    {tab == 'Notifications' ? <View style={styles.indicatorView} /> : null}
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setTab('Messages')} style={{ width: '45%' }}>
                                    <TextComponent text={'Messages'} style={[styles.notificationsText, { color: tab == 'Messages' ? COLORS.ACTIVE_INDICATOR : COLORS.PLACEHOLDER, fontWeight: tab == 'Messages' ? '700' : '400' }]} />
                                    {tab == 'Messages' ? <View style={styles.indicatorView} /> : null}
                                </TouchableOpacity>
                            </View>
                            {tab == 'Notifications' ?
                                (<FlatList
                                    data={notifications}
                                    keyExtractor={(item) => item.id.toString()}
                                    renderItem={renderNotificationList}
                                />)
                                : (<FlatList
                                    data={messages}
                                    keyExtractor={(item) => item.id.toString()}
                                    renderItem={renderMessagesList}
                                />)}
                        </>
                    } />
            </>
        } />
    )
}

export default ChefNotifications

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
        width: 150,
        backgroundColor: COLORS.ACTIVE_INDICATOR,
        marginTop: 15,
        borderRadius:200
    },
    indicatorBgView: {
        height: 0.5,
        width: '100%',
        backgroundColor: COLORS.PLACEHOLDER,
        position: 'absolute',
        top: Platform.OS=='android'?117:151.5,
        zIndex: 1000,
        opacity: 0.5
    },
    listView: {
        height: 100,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.TEXTINPUT_BG,
        paddingVertical: 24,
        justifyContent: 'center'
    },
    imageAndNameView: {
        flexDirection: 'row',
        height: 54,
        justifyContent: 'space-between'
    },
    userImage: {
        height: 54,
        width: 54,
        backgroundColor: COLORS.COMMON_GRAY,
        borderRadius: 200
    },
    onlineView: {
        height: 12,
        width: 12,
        backgroundColor: '#9C9BA6',
        borderRadius: 200,
        borderWidth: 2,
        borderColor: COLORS.MAIN_BG,
        alignSelf: 'flex-end',
        marginTop: -12,
    },
    userNameText: {
        fontSize: 13,
        fontWeight: '400',
        color: COLORS.TITLE,
        lineHeight: 18,
    },
})