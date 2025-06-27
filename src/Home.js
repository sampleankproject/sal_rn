import React from 'react';
// import type {PropsWithChildren} from 'react';
import {ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,Button, Alert} from 'react-native';
import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer,useNavigation} from '@react-navigation/native';
import ProfileScreen from './ProfileScreen';


const HomeScreen = () => {
    const navigation = useNavigation();
    return (
      <View style={{ backgroundColor: 'red' }}>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Button
        title='ajajja'
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Profile', {
            itemId: 86,
            otherParam: 'anything you want here',
            name:'Abc'
          });
        }}
      ></Button>

      </View>
    );
  };

  export default HomeScreen