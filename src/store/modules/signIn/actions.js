import types from "./types";

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {actions as signInActions,selectors as SignInSelectors} from '../signIn';
// import AccountBilling from '../../../../src/graphQL/query/FETCH_PROFILE.graphql';
// import FetchProfile from '../../../graphQL/query/FETCH_PROFILE.graphql'
import AccountBilling from './query/FETCH_PROFILE.js'
import GetMemberDataUsrIdEncrypt from './query/SIGN_IN_EMAIL.js'
import SetUserRegData from './mutation/REG_USER_DATA.js'
import GetUserDataByToken from './query/GET_USER_DATA_BY_TOKEN.js'
import AddBook from './mutation/ADD_BOOK.js'
import {actions as ApiActions}  from '../api'
import async from "./async.js";
import * as Keychain from "react-native-keychain";


// const accountListData= useSelector(SignInSelectors.getAccountTypeList, shallowEqual);
export const setUserDetails = setUserDetails => {
  console.log("setUserDetails_RRRRRRR", setUserDetails);
 return (
  {
  type: types.SET_USER_DETAILS,
  payload: {setUserDetails},
})};


export const setUserToken = setUserToken => {
  console.log("setUserToken_RRRRRRR", setUserToken);
 return (
  {
  type: types.SET_USER_TOKEN,
  payload: {setUserToken},
})};

export const setAccountTypeList = setAccountTypeList => ({
    type: types.SET_ACCOUNT_TYPE_LIST,
    payload: {setAccountTypeList},
  });

  export const addAccountTypesData = addAccountTypesData => ({
    type: types.SET_ACCOUNT_TYPE_DATA,
    payload: {addAccountTypesData},
  });




export const fetchAccountTypes = () => async (dispatch, getState)  => {
  console.log("fetchAccountTypes", fetchAccountTypes)
  const def = getState().signIn.setAccountTypeList;
  console.log("def", def)
    try {
//uncomment to increase count
      // const formatted = 1+def;
      // return dispatch(setAccountTypeList(formatted));

  /////--------------------------------------------------------------
//uncomment to fetch data
  const variables = {
    "postId": "6858365ea0669c50eb2f644c"
  };
  return dispatch(
    ApiActions.fetchAsync(async.fetchAccountTypes, AccountBilling, variables),
  ).then((response) => {
    console.log("RESPONSE_fetch", response)
    // return dispatch(setBillingRate(employer?.billingRate));
    return dispatch(setAccountTypeList(response));
  });
    } catch (error) {
      console.log("ERROR", error)
    }
  };


  export const addAccountTypes = () => async (dispatch, getState)  => {
    const variables = {
      "title": "ABC_Title2",
      "content": "ABC_Content"
    }
    return dispatch(
      ApiActions.fetchAsync(async.addAccountTypes, AddBook, variables),
    ).then((response) => {
      console.log("RESPONSE_add", response)
      return dispatch(addAccountTypesData(response));
    });

  }

  const handleLogin = async (secureToken) => {
    const nameToken = "secureValueToken";
    const token = secureToken;
    await Keychain.setGenericPassword(nameToken, token);
    console.log("secureToken_ZZZZZZZ", secureToken);
  };

  export const regUser = (regUserData) => async (dispatch, getState)  => {
    console.log("regUserData_AAJJAJAJ", regUserData)
    const variables = regUserData; 
    return dispatch(
      ApiActions.fetchAsync(async.regUser, SetUserRegData, variables),
    ).then((response) => {
      console.log("RESPONSE_addReg", response)
      console.log("RESPONSE_add", response.data.createMemberData.usrUniqueId);
      const secureToken = response.data.createMemberData.usrUniqueId
      console.log("reg_secureToken", secureToken)
      handleLogin(secureToken);
      return dispatch(setUserToken(secureToken))
    }).catch((error)=>{console.log("regUser error", error)});
  }

  export const signInGetUsrId = (userCredential) => async (dispatch, getState)  => {
    console.log("signIn_userCredential_AAJJAJAJ", userCredential)
    console.log("signInGetUsrId_ACTION");
    const variables = userCredential; 
    // const variables = {"email": "abc@getMaxListeners.com", "password": "abc123"}
    // const variables = {"keyword": "sh"}
    return dispatch(
      ApiActions.fetchAsync(async.signInGetUsrId, GetMemberDataUsrIdEncrypt, variables),
    ).then((response) => {
      console.log("RESPONSE_add", response.data.getMemberDataUsrIdEncrypt[0].usrUniqueId);
      const secureToken = response.data.getMemberDataUsrIdEncrypt[0].usrUniqueId
      handleLogin(secureToken);
      console.log("signIn_secureToken", secureToken)
      return dispatch(setUserToken(secureToken))
    });
  }

  export const fetchUserData = (userToken) => async (dispatch, getState)  => {
    console.log("userToken", userToken)
    // const variables = usrUniqueId; 
    const variables = { usrUniqueId:"hjajdddf"}; 
    console.log("fetchUserData_variables", variables)
    return dispatch(
      ApiActions.fetchAsync(async.fetchUserData, GetUserDataByToken, variables),
    ).then((response) => {
      console.log("USER_DETAILS", response)
      return dispatch(setUserDetails(response.data))
    });
  }