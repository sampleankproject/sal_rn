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
              let bgcolor;
           

              if (route.name === 'Services') {
                iconName = focused ? 'apps-outline' : 'apps-outline';
                bgcolor = focused ? '#acdbdf' : 'white';
                
              }  else if (route.name === 'Rewards') {
                iconName = focused ? 'trophy-outline' : 'trophy-outline';
                bgcolor = focused ? '#acdbdf' : 'white';
              }  else if (route.name === 'Pay') {
                iconName = focused ? 'wallet-outline' : 'wallet-outline';
                bgcolor = focused ? '#acdbdf' : 'white';
              } else if (route.name === 'Offers') {
                iconName = focused ? 'bag-handle-outline' : 'bag-handle-outline';
                bgcolor = focused ? '#acdbdf' : 'white';
              } else{
                iconName = focused ? 'person-outline' : 'person-outline';
                bgcolor = focused ? '#acdbdf' : 'white';
              }

              // You can return any component that renders an icon
              return <Ionicons name={iconName} size={size} color={color} backgroundColor={bgcolor} borderRadius={20} justifyContent="center" justifyItem="center" alignItem="center"/>;
            },
            tabBarActiveTintColor: '#3A49F9',
            tabBarInactiveTintColor: '#92adff',

          

            // tabBarShowLabel: ({ focused, color, size }) => {
            //   console.log("routeNameLabel", route)
            //   console.log("focusedNameLabel", focused)           
            //   let iconNameLabel;
            //   if (route.name === 'Services') {
            //     iconNameLabel = focused ? true : false;
            //   }  
            //   console.log("iconNameLabel", iconNameLabel)
            //   // You can return any component that renders an icon
            //   return iconNameLabel;
            // },


            // tabBarLabel: ({ focused, horizontal, tintColor }) => {
          
            //   let title;
            //   if (route.name === 'Services') {
            //     title = focused ? 'Services' : 'scsd';
            //   }else  {
            //     title = focused ? 'Services' : 'Services';
            //   }
            //   return title
            // }
            // tabBarShowLabel : false 
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

        <BottomTabStack.Screen options={{headerShown: false}} name="Services" component={TabServices} />
        <BottomTabStack.Screen name="Rewards" component={TabRewardTransaction} />
        <BottomTabStack.Screen name="Pay" component={TabPay} />
        <BottomTabStack.Screen name="Offers" component={TabOffers} />
        <BottomTabStack.Screen name="Account" component={TabMyAccount} />

      </BottomTabStack.Navigator>
    );
  }