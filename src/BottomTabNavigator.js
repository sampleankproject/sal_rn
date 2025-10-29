import { BottomTabBar } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import HomeScreen2 from './Home2';
import ProfileScreen from './ProfileScreen';
import ProfileScreen2 from './ProfileScreen2';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreenTab from './HomeTab';
import ProfileScreenTab from './ProfileScreenTab';

import TabMyAccount from './TabMyAccount';
import TabPay from './TabPay';
import TabRewardTransaction from './TabRewardTransaction';
import TabServices from './TabServices';
import TabOffers from './TabOffers';
import Ionicons from '@react-native-vector-icons/ionicons'

const BottomTabStack = createBottomTabNavigator();
export function MyStack2Tab() {
    return (
         <BottomTabStack.Navigator
          screenOptions={({ route }) => (
            
            {
          
            tabBarIcon: ({ focused, color, size }) => {
              console.log("routeName", route)
              console.log("focusedName", focused)
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else{
                iconName = focused ? 'settings' : 'settings-outline';
              }

              // You can return any component that renders an icon
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'black',
          })}
          screenListeners={({ route, focused}) => ({
            tabPress: (e) => {
              // Prevent default behavior if needed
              // e.preventDefault(); 
    
              // Your custom logic for tab press event
              console.log(`Tab pressed: ${route.name}`);
            },
          })}
        >
        {/* <BottomTabStack.Screen name="HomeTab" component={HomeScreenTab} />
        <BottomTabStack.Screen name="ProfileTab" component={ProfileScreenTab} /> */}

        <BottomTabStack.Screen name="Services" component={TabServices} />
        <BottomTabStack.Screen name="Rewards" component={TabRewardTransaction} />
        <BottomTabStack.Screen name="Pay" component={TabPay} />
        <BottomTabStack.Screen name="Offers" component={TabOffers} />
        <BottomTabStack.Screen name="Account" component={TabMyAccount} />

      </BottomTabStack.Navigator>
    );
  }