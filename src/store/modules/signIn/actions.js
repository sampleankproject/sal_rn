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

export const setUserDetailsEmpty = () => {
  console.log("setUserDetails_RRRRRRR_Empty");
 return (
  {
  type: types.SET_USER_DETAILS,
  payload: {},
})};


export const setUserToken = setUserToken => {
  console.log("44444444")
  console.log("setUserToken_RRRRRRR", setUserToken);
 return (
  {
  type: types.SET_USER_TOKEN,
  payload: {setUserToken},
})};

export const setUserTokenEmpty = () => {
  console.log("setUserToken_RRRRRRR_Empty");
 return (
  {
  type: types.SET_USER_TOKEN,
  payload: {},
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
    console.log("2222222")
    console.log("secureToken", secureToken)
    const nameToken = "secureValueToken";
    const token = secureToken;
    await Keychain.setGenericPassword(nameToken, token);
    console.log("secureToken_ZZZZZZZ", secureToken);
    console.log("3333333")
  };

  export const regUser2 = (regUserData) => async (dispatch, getState)  => {
    console.log("regUserData_AAJJAJAJ", regUserData)
    const variables = regUserData; 
    return dispatch(
      ApiActions.fetchAsync(async.regUser, SetUserRegData, variables),
    ).then((response) => {
      if (!response) {
        throw new Error("User token not found in response");
      }
      console.log("RESPONSE_addReg", response)
      console.log("RESPONSE_add", response.data.createMemberData.usrUniqueId);
      const secureToken = response?.data?.createMemberData?.usrUniqueId
      console.log("reg_secureToken", secureToken)
      handleLogin(secureToken);
      return dispatch(setUserToken(secureToken))
    }).catch((error)=>{console.log("regUser error", error)});
  }

  export const regUser = (regUserData) => async (dispatch, getState)  => {
    console.log("regUserData_AAJJAJAJ", regUserData)
    console.log("reg_11111111")
    const variables = regUserData; 
    try {
      const response = await  dispatch(
        ApiActions.fetchAsync(
        async.regUser, 
        SetUserRegData, 
        variables
      )
    )
      const secureToken = response?.data?.createMemberData?.usrUniqueId
      if (!secureToken) {
        console.log("secureToken is missing")
        throw new Error("secureToken is missing");
      }
      console.log("reg_secureToken", secureToken)
      await handleLogin(secureToken);
      return dispatch(setUserToken(secureToken));
  }catch (error) {
    console.log("SIGNIN_NOT_SUCCESSFUL", error);
    throw error;
  }}

  export const signInGetUsrId2 = (userCredential) => async (dispatch, getState)  => {
    console.log("signIn_userCredential_AAJJAJAJ", userCredential)
    console.log("signInGetUsrId_ACTION");
    const variables = userCredential; 
    // const variables = {"email": "abc@getMaxListeners.com", "password": "abc123"}
    // const variables = {"keyword": "sh"}
    return  dispatch(
      ApiActions.fetchAsync(async.signInGetUsrId, GetMemberDataUsrIdEncrypt, variables),
    ).then((response) => {
      if (!response) {
        throw new Error("User token not found in response");
      }
      console.log("RESPONSE_signInGetUsrId", response)
      console.log("RESPONSE_add_signInGetUstId", response.data.getMemberDataUsrIdEncrypt[0].usrUniqueId);
      // const secureToken = { usrUniqueId: response.data.getMemberDataUsrIdEncrypt[0].usrUniqueId}; 
      const secureToken = response?.data?.getMemberDataUsrIdEncrypt?.[0]?.usrUniqueId
      handleLogin(secureToken);
      console.log("signI148n_secureToken", secureToken)
       return dispatch(setUserToken(secureToken))
    }).catch((error)=>{console.log("SIGNIN_NOT_SUCCESFULL", error)});
  }

  export const signInGetUsrId =
  (userCredential) => async (dispatch, getState) => {
    console.log("11111111")
    try {
      const response = await dispatch(
          ApiActions.fetchAsync(
          async.signInGetUsrId,
          GetMemberDataUsrIdEncrypt,
          userCredential
        )
      );

      const secureToken =
        response?.data?.getMemberDataUsrIdEncrypt?.[0]?.usrUniqueId;

      if (!secureToken) {
        console.log("secureToken is missing")
        throw new Error("secureToken is missing");
      }

      console.log("SECURE_TOKEN_OK", secureToken);

      await handleLogin(secureToken); // 🔑 await this

      return  dispatch(setUserToken(secureToken)); // 🔥 this WILL run now
      // return secureToken;

    } catch (error) {
      console.log("SIGNIN_NOT_SUCCESSFUL", error);
      throw error;
    }
  };


  export const fetchUserData = (userToken) => async (dispatch, getState)  => {
    console.log("6666666")
    console.log("userToken", userToken)
    const variables = userToken; 
    // const variables = { usrUniqueId:"hjajdddf"}; 
    console.log("fetchUserData_variables", variables)
    return dispatch(
      ApiActions.fetchAsync(async.fetchUserData, GetUserDataByToken, variables),
    ).then((response) => {
      console.log("7777777")
      console.log("USER_DETAILS", response)
      return dispatch(setUserDetails(response.data))
    });
  }