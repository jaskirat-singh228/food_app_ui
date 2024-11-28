import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChefHomeScreen from '../../homescreen/src/ChefHomeScreen';
import AddNewItems from '../../addnewitems/src/AddNewItems';
import ChefProfile from '../../profile/src/ChefProfile';
import { COLORS } from '../../utills/Colors';
import { IMAGES } from '../../utills/Images';
import ImageComponent from '../../utills/ImageComponent';
import ChefNotifications from '../../notifications/src/ChefNotifications';
import MyFoodList from '../../menu/src/MyFoodList';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? iconName = IMAGES.ACTIVE_BOTTOM_HOME
                            : IMAGES.BOTTOM_HOME
                    } else if (route.name === 'MyFoodList') {
                        iconName = focused ? iconName = IMAGES.ACTIVE_BOTTOM_MENU
                            : IMAGES.BOTTOM_MENU
                    } else if (route.name === 'AddNewItems') {
                        iconName = IMAGES.BOTTOM_ADD_NEW_ITEMS;
                    } else if (route.name === 'Notifications') {
                        iconName = focused ? iconName = IMAGES.ACTIVE_BOTTOM_NOTIFICATIONS
                            : IMAGES.BOTTOM_NOTIFICATIONS
                    } else if (route.name === 'Profile') {
                        iconName = focused ? iconName = IMAGES.BOTTOM_PROFILE
                            : IMAGES.BOTTOM_PROFILE
                    }
                    return <ImageComponent source={iconName} style={{ tintColor: route.name === 'Profile' ? (focused ? COLORS.ACTIVE_INDICATOR : COLORS.PLACEHOLDER) : null }} />;
                },
                tabBarIconStyle: { marginTop: Platform.OS == 'android' ? 0 : 20 },
                headerShown: false,
                tabBarStyle: {
                    height: Platform.OS=='android'?82:89,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    shadowOpacity: 0.10,
                    shadowColor:'#000',
                    elevation:5,
                    shadowOffset: { width: 0, height: -2 },
                    shadowRadius: 10,
                    position: 'absolute',
                    backgroundColor: COLORS.MAIN_BG
                },
                tabBarActiveTintColor: COLORS.ACTIVE_INDICATOR,
                tabBarInactiveTintColor: COLORS.PLACEHOLDER,
                tabBarShowLabel: false,

            })}
        >
            <Tab.Screen name="Home" component={ChefHomeScreen} />
            <Tab.Screen name="MyFoodList" component={MyFoodList} />
            <Tab.Screen name="AddNewItems" component={AddNewItems} />
            <Tab.Screen name="Notifications" component={ChefNotifications} />
            <Tab.Screen name="Profile" component={ChefProfile} />
        </Tab.Navigator>
    )
}

export default BottomNavigation
