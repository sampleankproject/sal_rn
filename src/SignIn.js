import React from 'react';
// import type {PropsWithChildren} from 'react';
import {ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,Button, TextInput,Alert} from 'react-native';
import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer,useNavigation} from '@react-navigation/native';
import ProfileScreen from './ProfileScreen';


const SignInScreen = () => {
    const navigation = useNavigation();
    const signIn =()=>{
    console.log("SIGN IN LOG")
    navigation.navigate('Home');
    }
    return (
      <View >
        <Text>Welcome Please Sign In</Text>
        <Text>Email</Text>
        <TextInput></TextInput>
        <Text>Password</Text>
        <TextInput></TextInput>

        <Button
        title='NEXT'
        onPress={()=>(signIn())
        }
      ></Button>

              <Button
              title='ajajja'
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Home');
              }}
            ></Button>

      </View>
    );
  };

  export default SignInScreen