import React, {useState} from 'react';
// import type {PropsWithChildren} from 'react';
import {ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,Button, TextInput,Alert} from 'react-native';
import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer,useNavigation} from '@react-navigation/native';
import ProfileScreen from './ProfileScreen';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {actions as signInActions,
  selectors as SignInSelectors,
} from './store/modules/signIn';
import * as Keychain from "react-native-keychain";


const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const userCredential = {
        email: email,
        password: password
    }
     const fetchSignInData = () => dispatch(signInActions.signInGetUsrId(userCredential));

          const handleCheckSignIn = async () => {
            const tokenCredentialsId = await Keychain.getGenericPassword();
            console.log("CHECK_handleCheckSignIn_gettoken",tokenCredentialsId.password);
            const userToken = {
              usrUniqueId: tokenCredentialsId.password
            }
            dispatch(signInActions.fetchUserData(userToken));
            };

    const signInfetchData =()=>{
    console.log("SIGN IN LOG signInGetUsrId")
    fetchSignInData();
    setTimeout(()=>{
      handleCheckSignIn();
    }, 1000);
    navigation.navigate('Tab'); 
    }

    const enterPhone = (phoneData) =>{
      console.log("phoneData", phoneData)
      setPhone(phoneData)
    }

    const enterEmail = (emailData) =>{
      console.log("emailData", emailData)
      setEmail(emailData)
    }

    const enterPassword = (passwordData) =>{
      console.log("passwordData", passwordData)
      setPassword(passwordData)
    }

    const register =()=>{
      console.log("Register Here")
      navigation.navigate('Register');
      }

    return (
      <View >
        <Text>Welcome Please Sign In</Text>
        <Text>Phone</Text>
        <TextInput onChangeText={enterPhone}></TextInput>
        <Text>Email</Text>
        <TextInput onChangeText={enterEmail}></TextInput>
        <Text>Password</Text>
        <TextInput onChangeText={enterPassword}></TextInput>
          <Button title='Register Here' onPress={()=>(register())}>Register Here</Button>
          {/* <Button title='Sign In'       onPress={()=>(signIn())}></Button> */}
          <Button title='Sign-In' onPress={()=>{signInfetchData()}}>fetchData</Button>
          <Button title='Home'          onPress={() => {navigation.navigate('Home');
                // navigation.navigate('Profile', {
                //   itemId: 86,
                //   otherParam: 'anything you want here',
                //   name:'Abc'
                // });
              }}></Button>
      </View>
    );
  };

  export default SignInScreen