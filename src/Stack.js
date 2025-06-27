// import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import HomeScreen2 from './Home2';
import ProfileScreen from './ProfileScreen';
import ProfileScreen2 from './ProfileScreen2';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyStack2Tab } from './BottomTabNavigator';


const Stack = createNativeStackNavigator();

export function MyStack1() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}


export function MyStack2() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen2} />
      <Stack.Screen name="Profile" component={ProfileScreen2} />
    </Stack.Navigator>
  );
}
  export function MyStackTab() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Tab" component={MyStack2Tab} />
      </Stack.Navigator>
    );
}
