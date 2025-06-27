import { BottomTabBar } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import HomeScreen2 from './Home2';
import ProfileScreen from './ProfileScreen';
import ProfileScreen2 from './ProfileScreen2';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreenTab from './HomeTab';
import ProfileScreenTab from './ProfileScreenTab';


const BottomTabStack = createBottomTabNavigator();
export function MyStack2Tab() {
    return (
      <BottomTabStack.Navigator>
        <BottomTabStack.Screen name="HomeTab" component={HomeScreenTab} />
        <BottomTabStack.Screen name="ProfileTab" component={ProfileScreenTab} />
      </BottomTabStack.Navigator>
    );
  }