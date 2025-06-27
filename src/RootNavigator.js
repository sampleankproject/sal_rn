/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from './ProfileScreen';
import HomeScreen from './Home';
import { MyStack1, MyStack2, MyStackTab} from './Stack';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {actions as signInActions,
  selectors as SignInSelectors,
} from './store/modules/signIn';



const RootNavigator=()=> {

  const RootStack = createNativeStackNavigator();
  const abc = 1;
  const accountListData= useSelector(SignInSelectors.getAccountTypeList, shallowEqual);
  console.log("RootNavigationScreen", accountListData)
  return (
   <RootStack.Navigator>
{(accountListData<20)?
      <RootStack.Screen name='Onboard' component={MyStack1} />
        
      :
      // <RootStack.Screen name='Onboard' component={MyStack2} />
       <RootStack.Screen name='OnboardTab' component={MyStackTab} />   
}
    </RootStack.Navigator>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default RootNavigator;
