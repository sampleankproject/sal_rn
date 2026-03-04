/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
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
import { SignInStack } from './Stack';
import * as Keychain from "react-native-keychain";
import { MyStack2Tab } from './BottomTabNavigator';



const RootNavigator=()=> {

  const dispatch = useDispatch();

  const [key, setKey] = useState(null);

  const RootStack = createNativeStackNavigator();
  const abc = 1;
  // const accountListData= useSelector(SignInSelectors.getAccountTypeList, shallowEqual);
  // console.log("RootNavigationScreen", accountListData)

  const getKey = async()=>{
    const tokenCredentialsId = await Keychain.getGenericPassword();
    
  console.log("tokenCredentialsId",tokenCredentialsId )
  setKey(tokenCredentialsId)
  // return tokenCredentialsId
  }
  // const tokenCredentialsId =  Keychain.getGenericPassword();
  // console.log("tokenCredentialsId",tokenCredentialsId )

const getUserDetails= useSelector(SignInSelectors.getUserUserDetails, shallowEqual);
console.log("GET_USER_DETAILS", getUserDetails)

  useEffect(()=>{
    getKey()
  },[])
// const keyDetails = getKey();
// console.log("KEY_DETAILS", keyDetails)
  // if(getKey?.password){

  // }
  return (
   <RootStack.Navigator>
    {/* {abc >100 ? */}
{key?.password ?

      // <RootStack.Screen name='Onboard' component={MyStack1} />
      // <RootStack.Screen options={{headerShown: false}} name='SignInRoot' component={SignInStack}/>

       <RootStack.Screen options={{headerShown: false}} name="TabMain" component={MyStack2Tab} />
        
      :
      // <RootStack.Screen name='Onboard' component={MyStack2} />
      //  <RootStack.Screen name='OnboardTab' component={MyStackTab} /> 
      //  <RootStack.Screen name='Onboard' component={MyStack1} />  

       <RootStack.Screen options={{headerShown: false}} name='SignInRoot' component={SignInStack}/>
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
