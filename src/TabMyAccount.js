import React from 'react';
// import type {PropsWithChildren} from 'react';
import {ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,Button} from 'react-native';
import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {actions as signInActions,
  selectors as SignInSelectors,
} from '../src/store/modules/signIn';
import * as Keychain from "react-native-keychain";


  const TabMyAccount = ({route}) => {
    // console.log('aaaaaaaaaaA', route);
     const dispatch = useDispatch();
     const navigation = useNavigation();

     const setUserDetailsEmpty = () => dispatch(signInActions.setUserDetailsEmpty());
      const setUserTokenEmpty = () => dispatch(signInActions.setUserTokenEmpty());

      const clearToken = async () =>{
        await Keychain.resetGenericPassword();
        setUserDetailsEmpty();
        setUserTokenEmpty();
        navigation.navigate('SignIn');
        }


    const getUserDetails= useSelector(SignInSelectors.getUserUserDetails, shallowEqual);
    const UserDetails = getUserDetails?.getTokenUserData[0]
    console.log("USER_DETAILS", getUserDetails?.getTokenUserData[0]
    )
    return (<View>
        <Text>This is TabMyAccount</Text>
        <View>
        {UserDetails && Object.entries(UserDetails).map(([key, value]) => (
          <View key={key}>
            <View>
              <Text>{key}:{String(value)}</Text>
            </View>
          </View>
        ))}
        <Button
          title='Clear Token'
          onPress={()=>(clearToken())
          }>
        </Button>
      </View>
      </View>);
  };
  export default TabMyAccount