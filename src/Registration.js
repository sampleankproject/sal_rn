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
import { getUserToken } from './store/modules/signIn/selectors';
import {store} from '../src/store/store'


const RegistrationScreen = () => {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');


  const dispatch = useDispatch();
    const navigation = useNavigation();
 
    const regValue = {
      fullName: fullName,
      usrName: userName,
      // usrType: "member",
      email: email,
      phone: phone,
      password: password,
      // usrId: "1234",
      // usrUniqueId: "2333"
    }

    const setUserRegData = () => dispatch(signInActions.regUser(regValue));

    const setUserDetailsEmpty = () => dispatch(signInActions.setUserDetailsEmpty());

    const setUserTokenEmpty = () => dispatch(signInActions.setUserTokenEmpty());

    const handleCheckSignIn = async () => {
      const tokenCredentialsId = await Keychain.getGenericPassword();

      if (!tokenCredentialsId) {
        throw new Error("No credentials found");
      }
      const userToken = {
        usrUniqueId: tokenCredentialsId.password
      }
      dispatch(signInActions.fetchUserData(userToken));
      };

    const clearToken = async () =>{
        const tokenCredentialsId = await Keychain.resetGenericPassword();
        setUserDetailsEmpty();
        setUserTokenEmpty();
      }

    const getToken = async () =>{
        const tokenCredentialsId = await Keychain.getGenericPassword();
      }

    const enterFullName = (fullNameData) =>{
      setFullName(fullNameData)
    }

    const enterUserName = (userNameData) =>{
      setUserName(userNameData)
    }
    
    const enterPhone = (phoneData) =>{
      setPhone(phoneData)
    }

    const enterEmail = (emailData) =>{
      setEmail(emailData)
    }

    const enterPassword = (passwordData) =>{
      setPassword(passwordData)
    }
    

     const registerHere =async()=>{
      try{
      await setUserRegData();
      await handleCheckSignIn()
      .then(navigation.navigate('Home'))
      // navigation.navigate('SignIn');
      // navigation.navigate('Home'); 
      }catch (error) {
      }
      }

    const signIn =()=>{
      navigation.navigate('SignIn');
      }

    const Home =()=>{
    navigation.navigate('Home');
    }
    return (
      <View >
        <Text>Please Register</Text>
        <Text>Full Name</Text>
        <TextInput onChangeText={enterFullName}></TextInput>
        <Text>User Name</Text>
        <TextInput onChangeText={enterUserName}></TextInput>
        <Text>Phone</Text>
        <TextInput onChangeText={enterPhone}></TextInput>
        <Text>Email</Text>
        <TextInput onChangeText={enterEmail}></TextInput>
        <Text>Password</Text>
        <TextInput onChangeText={enterPassword}></TextInput>

        <Button
        title='SignIn Here'
        onPress={()=>(signIn())
        }>
        </Button>
        <Button
        title='Home'
        onPress={()=>(Home())
        }>
        </Button>
      <Button
        title='Register'
        onPress={()=>(registerHere())
        }>
      </Button>
      <Button
        title='Clear Token'
        onPress={()=>(clearToken())
        }>
      </Button>
      <Button
        title='getToken'
        onPress={()=>(getToken())
        }>
      </Button>
      </View>
    );
  };

  export default RegistrationScreen