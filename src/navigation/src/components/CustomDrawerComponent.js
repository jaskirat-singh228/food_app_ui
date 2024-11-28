import { Alert, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import DrawerFlatlist from './DrawerFlatlist';
import { LISTS } from '../../../utills/Lists';
import { COLORS } from '../../../utills/Colors';
import TextComponent from '../../../utills/TextComponent';
import { useNavigation } from '@react-navigation/native';

const CustomDrawerComponent = (props) => {
    const navigation = useNavigation();
    const drawerList1 = LISTS.drawerList1;
    const drawerList2 = LISTS.drawerList2;
    const drawerList3 = LISTS.drawerList3;
    const drawerList4 = LISTS.drawerList4;

    const handleDrawerPress = (item) => {
        const routes = {
            'Personal Info': 'PersonalInfo',
            'Addresses': 'MyAddresses',
            'Cart': 'MyCart',
            'Payment Method': 'PaymentMethod',
            'My Orders': 'MyOrders',
        };
        if (routes[item?.title]) {
            navigation.navigate(routes[item.title]);
        } else {
            Alert.alert('Alert', 'Create  a file to continue.');
        }
    };

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.MAIN_BG, marginTop: 60 }}>
            <ScrollView showsVerticalScrollIndicator={false} {...props} style={{ paddingHorizontal: 24, backgroundColor: COLORS.MAIN_BG }}>
                <View style={styles.userInfoContainer}>
                    <View style={styles.userImage} />
                    <View style={{ justifyContent: 'center', marginLeft: 20 }}>
                        <TextComponent text={'Vishal Khadok'} style={styles.userNameText} />
                        <TextComponent text={'I love fast food'} style={styles.userBioText} />
                    </View>
                </View>
                <DrawerFlatlist data={drawerList1} onPressMenu={(item) => handleDrawerPress(item)} />
                <DrawerFlatlist data={drawerList2} onPressMenu={(item) => handleDrawerPress(item)} />
                <DrawerFlatlist data={drawerList3} onPressMenu={(item) => handleDrawerPress(item)} />
                <DrawerFlatlist data={drawerList4} onPressMenu={(item) => handleDrawerPress(item)} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default CustomDrawerComponent

const styles = StyleSheet.create({
    userInfoContainer: {
        height: 100,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 10
    },
    userImage: {
        height: 100,
        width: 100,
        borderRadius: 200,
        backgroundColor: COLORS.COMMON_GRAY
    },
    userNameText: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 24.06,
        color: COLORS.PROFILE_INFO_LIST_TITLE
    },
    userBioText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 24,
        color: COLORS.PROFILE_INFO_LIST_SUBTITLE
    },
})