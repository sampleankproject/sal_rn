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


  const ProfileScreen = ({route}) => {

    const dispatch = useDispatch();
    console.log('aaaaaaaaaaA', route)

    const checkData = () => dispatch(signInActions.fetchAccountTypes());
    const addData = () => dispatch(signInActions.addAccountTypes());

    const accountListData= useSelector(SignInSelectors.getAccountTypeList, shallowEqual);
    console.log("accountListData", accountListData)

    const checkData2 =()=>{
      console.log("ABCDEF")
    }
    return (
    <View>
      <Text>This is {route.params.name}'s profile {accountListData}</Text>
      
        <Button title='ajajja2' onPress={()=>{console.log("abcdef")}}>ajaj</Button>
        <Button title='FETCH' onPress={()=>{checkData()}}>fetchData</Button>
        <Button title='ADD' onPress={()=>{addData()}}>addData</Button>
    </View>
    );
  };
  export default ProfileScreen