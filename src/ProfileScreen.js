import React from 'react';
// import type {PropsWithChildren} from 'react';
import {ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,Button} from 'react-native';
import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {actions as signInActions,
  selectors as SignInSelectors,
} from './store/modules/signIn';

import {actions as getPhonesActions,
  selectors as getPhonesSelectors,
} from './store/modules/getPhones';


  const ProfileScreen = ({route}) => {

    const dispatch = useDispatch();
    console.log('aaaaaaaaaaA', route)

    const fetchData = () => dispatch(signInActions.fetchAccountTypes());
    const addData = () => dispatch(signInActions.addAccountTypes());
    const restFetch = () => dispatch(getPhonesActions.fetchPhoneType());

    // const accountListData= useSelector(SignInSelectors.getAccountTypeList, shallowEqual);
    // console.log("accountListData", accountListData)

    const checkData2 =()=>{
      console.log("ABCDEF")
    }
    return (
    <View>
      {/* <Text>This is {route.params.name}'s profile {accountListData}</Text> */}
      
        <Button title='ajajja2' onPress={()=>{console.log("abcdef")}}>ajaj</Button>
        <Button title='Fetch' onPress={()=>{fetchData()}}>fetchData</Button>
        <Button title='Addß' onPress={()=>{addData()}}>addData</Button>
        <Button title='RESTCHECK' onPress={()=>{restFetch()}}>restFetch</Button>
    </View>
    );
  };
  export default ProfileScreen