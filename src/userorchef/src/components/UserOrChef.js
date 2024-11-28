import { StyleSheet, View, } from 'react-native'
import React, { useEffect, useState } from 'react'
import SafeAreaViewComponent from '../../../utills/SafeAreaViewComponent'
import CommonButton from '../../../utills/CommonButton'
import { COLORS } from '../../../utills/Colors'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CommonViewComponent from '../../../utills/CommonViewComponent'

const UserOrChef = () => {
    const [isSelected, setIsSelected] = useState('User Login');
    const navigation = useNavigation();
    const focus = useIsFocused();

    useEffect(() => {
        console.log(isSelected);
    }, [focus, isSelected])

    const handleUserLogin = () => {
        setIsSelected('User Login')
    }

    const handleChefLogin = () => {
        setIsSelected('Chef Login')
    }

    const storeIsSelected = async (value) => {
        console.log(isSelected, 'isSelected');

        try {
            await AsyncStorage.setItem('isSelected', value);
        } catch (error) {
            console.log(error);
        }
    };

    const handleNext = () => {
        storeIsSelected(isSelected)
        navigation.navigate('LoginScreen')
    }

    return (
        <SafeAreaViewComponent children={
            <CommonViewComponent children={
                <>
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 0.9, }}>
                    <CommonButton onPress={handleUserLogin} title={'User Login'} style={isSelected == 'User Login' ? styles.selectedTitle : styles.button}
                        titleStyle={isSelected == 'User Login' ? styles.selectedTitle : styles.title} />
                    <CommonButton onPress={handleChefLogin} title={'Chef Login'} style={isSelected == 'Chef Login' ? styles.selectedTitle : styles.button}
                        titleStyle={isSelected == 'Chef Login' ? styles.selectedTitle : styles.title} />
                </View>
                <View style={{ flex: 0.1, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <CommonButton onPress={handleNext} title={'Next'} style={{ marginTop: 200 }} />
                </View>
            </>
            }/>
        } />
    )
}

export default UserOrChef

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        fontWeight: '700',
        color: COLORS.PLACEHOLDER
    },
    button: {
        backgroundColor: null,
        borderWidth: 1,
        borderColor: COLORS.PLACEHOLDER,
        height: 62,
        width: '100%',
        borderRadius: 12,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedButton: {
        backgroundColor: COLORS.ACTIVE_INDICATOR,
        height: 62,
        width: '100%',
        borderRadius: 12,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectedTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: COLORS.MAIN_BG
    },
})