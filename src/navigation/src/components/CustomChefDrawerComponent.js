import { Platform, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import DrawerFlatlist from './DrawerFlatlist';
import { LISTS } from '../../../utills/Lists';
import { COLORS } from '../../../utills/Colors';
import { useNavigation } from '@react-navigation/native';
import SafeAreaViewComponent from '../../../utills/SafeAreaViewComponent';
import TextComponent from '../../../utills/TextComponent';

const CustomChefDrawerComponent = (props) => {
    const navigation = useNavigation();
    const chefDrawerList1 = LISTS.chefDrawerList1;
    const chefDrawerList2 = LISTS.chefDrawerList2;
    const chefDrawerList3 = LISTS.chefDrawerList3;
    const chefDrawerList4 = LISTS.chefDrawerList4;

    const handleDrawerPress = (item) => {
        //     const routes = {
        //         'Personal Info': 'PersonalInfo',
        //         'Addresses': 'MyAddresses',
        //         'Cart': 'MyCart',
        //         'Payment Method': 'PaymentMethod',
        //         'My Orders': 'MyOrders',
        //     };
        //     if (routes[item?.title]) {
        //         navigation.navigate(routes[item.title]);
        //     } else {
        //         Alert.alert('Alert', 'Create  a file to continue.');
        //     }
    };

    return (
        <>
            <View style={styles.chefUserInfoContainer} {...props}>
                <TextComponent text={'Available Balance'} style={styles.availableBalanceText} />
                <TextComponent text={'$500.00'} style={styles.availableBalanceNumber} />
                <TouchableOpacity style={styles.button}>
                    <TextComponent text={'Withdraw'} style={styles.withdrawText} />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} {...props} style={{ paddingHorizontal: 24, backgroundColor: COLORS.MAIN_BG }}>
                <DrawerFlatlist data={chefDrawerList1} onPressMenu={(item) => handleDrawerPress(item)} />
                <DrawerFlatlist data={chefDrawerList2} onPressMenu={(item) => handleDrawerPress(item)} isNumber={true} text={'29k'}/>
                <DrawerFlatlist data={chefDrawerList3} onPressMenu={(item) => handleDrawerPress(item)} />
                <DrawerFlatlist data={chefDrawerList4} onPressMenu={(item) => handleDrawerPress(item)} />
            </ScrollView>
        </>
    )
}

export default CustomChefDrawerComponent

const styles = StyleSheet.create({
    chefUserInfoContainer: {
        height: Platform.OS == 'android' ? 200 : 230,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        backgroundColor: COLORS.ACTIVE_INDICATOR,
        alignItems: 'center',
        justifyContent: 'center'
    },
    availableBalanceText: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 19.25,
        color: COLORS.MAIN_BG,
        marginTop: Platform.OS == 'android' ? 15 : 45
    },
    availableBalanceNumber: {
        fontSize: 40,
        fontWeight: '700',
        lineHeight: 48.13,
        color: COLORS.MAIN_BG,
        marginTop: 5
    },
    button: {
        borderWidth: 1,
        borderRadius: 10,
        height: 37,
        width: 100,
        borderColor: COLORS.MAIN_BG,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    withdrawText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16.84,
        color: COLORS.MAIN_BG
    }
})