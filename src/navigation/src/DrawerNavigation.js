import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../homescreen/src/HomeScreen';
import { COLORS } from '../../utills/Colors';
import CustomDrawerComponent from './components/CustomDrawerComponent';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

    return (
        <Drawer.Navigator
            initialRouteName={'HomeScreen'}
            screenOptions={{
                headerShown: false,
                drawerType: 'front',
                drawerStyle: { width: 330, backgroundColor: COLORS.MAIN_BG }
            }}
            drawerContent={(props) => <CustomDrawerComponent {...props} />}
        >
            <Drawer.Screen name={'HomeScreen'} component={HomeScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation