import React from 'react';
// import type {PropsWithChildren} from 'react';
import {ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,Button} from 'react-native';
import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer,useNavigation } from '@react-navigation/native';


  const ProfileScreen2 = ({route}) => {
    console.log('aaaaaaaaaaA', route)
    return <Text>This is {route.params.name}'s profile 2</Text>;
  };
  export default ProfileScreen2