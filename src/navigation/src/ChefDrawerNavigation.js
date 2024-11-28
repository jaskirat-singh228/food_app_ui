import { createDrawerNavigator } from '@react-navigation/drawer';
import { COLORS } from '../../utills/Colors';
import CustomChefDrawerComponent from './components/CustomChefDrawerComponent';
import BottomNavigation from './BottomNavigation';

const Drawer = createDrawerNavigator();

const ChefDrawerNavigation = () => {

    return (
        <Drawer.Navigator
            initialRouteName={'BottomNavigation'}
            screenOptions={{
                headerShown: false,
                drawerType: 'front',
                drawerStyle: { width: 330, backgroundColor: COLORS.MAIN_BG }
            }}
            drawerContent={(props) => <CustomChefDrawerComponent {...props} />}
        >
            <Drawer.Screen name={'BottomNavigation'} component={BottomNavigation} />
        </Drawer.Navigator>
    )
}

export default ChefDrawerNavigation