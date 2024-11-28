import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/splash/src/SplashScreen';
import OnboardingScreen from './src/onboarding/src/OnboardingScreen';
import LoginScreen from './src/login/src/LoginScreen';
import SignupScreen from './src/signup/src/SignupScreen';
import ForgetpasswordScreen from './src/forgetpassword/src/components/ForgetpasswordScreen';
import LocationaccessScreen from './src/locationaccess/src/LocationaccessScreen';
import SearchScreen from './src/search/SearchScreen';
import DeliveryManCallScreen from './src/callingwithdeliveryman/src/DeliveryManCallScreen';
import PersonalInfo from './src/personalinfo/src/PersonalInfo';
import PaymentMethod from './src/paymentmethod/src/PaymentMethod';
import RestaurantDetails from './src/restaurantdetails/src/RestaurantDetails';
import CategoryDetails from './src/categorydetails/src/CategoryDetails';
import MyCart from './src/mycart/src/MyCart';
import ProductDetails from './src/productdetails/src/ProductDetails';
import AddCard from './src/addcard/src/AddCard';
import TrackOrder from './src/trackorder/src/TrackOrder';
import DeliveryManChatScreen from './src/chatwithdeliveryman/src/DeliveryManChatScreen';
import DrawerNavigation from './src/navigation/src/DrawerNavigation';
import MyAddresses from './src/address/src/MyAddresses';
import EditProfile from './src/editprofile/src/components/EditProfile';
import AddNewAddress from './src/addnewaddress/src/AddNewAddress';
import MyOrders from './src/myorders/src/MyOrders';
import VerificationScreen from './src/forgetpassword/src/components/VerificationScreen';
import PaymentSuccessful from './src/paymentsuccessfull/src/PaymentSuccessfull';
import WithdrawSuccessful from './src/withdrawsucessful/src/WithdrawSuccessful';
import UserOrChef from './src/userorchef/src/components/UserOrChef';
import BottomNavigation from './src/navigation/src/BottomNavigation';
import ChefNotifications from './src/notifications/src/ChefNotifications';
import Reviews from './src/reviews/src/Reviews';
import AddNewItems from './src/addnewitems/src/AddNewItems';
import ChefProductDetails from './src/chefproductdetails/src/ChefProductDetails';
import ChefDrawerNavigation from './src/navigation/src/ChefDrawerNavigation';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='SplashScreen'
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="UserOrChef" component={UserOrChef} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="LocationaccessScreen" component={LocationaccessScreen} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="ForgetpasswordScreen" component={ForgetpasswordScreen} />
        <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        <Stack.Screen name="ChefDrawerNavigation" component={ChefDrawerNavigation} />
        <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
        <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen name="PaymentSuccessful" component={PaymentSuccessful} />
        <Stack.Screen name="TrackOrder" component={TrackOrder} />
        <Stack.Screen name="DeliveryManCallScreen" component={DeliveryManCallScreen} />
        <Stack.Screen name="DeliveryManChatScreen" component={DeliveryManChatScreen} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
        <Stack.Screen name="MyAddresses" component={MyAddresses} />
        <Stack.Screen name="AddNewAddress" component={AddNewAddress} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="MyOrders" component={MyOrders} />
        <Stack.Screen name="WithdrawSuccessful" component={WithdrawSuccessful} />
        <Stack.Screen name="ChefNotifications" component={ChefNotifications} />
        <Stack.Screen name="Reviews" component={Reviews} />
        <Stack.Screen name="AddNewItems" component={AddNewItems} />
        <Stack.Screen name="ChefProductDetails" component={ChefProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
