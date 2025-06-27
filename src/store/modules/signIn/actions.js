import types from "./types";

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {actions as signInActions,selectors as SignInSelectors} from '../signIn';
// import AccountBilling from '../../../../src/graphQL/query/FETCH_PROFILE.graphql';
// import FetchProfile from '../../../graphQL/query/FETCH_PROFILE.graphql'
import AccountBilling from './query/FETCH_PROFILE.js'
import AddBook from './mutation/ADD_BOOK.js'
import {actions as ApiActions}  from '../api'
import async from "./async.js";


// const accountListData= useSelector(SignInSelectors.getAccountTypeList, shallowEqual);


export const setAccountTypeList = setAccountTypeList => ({
    type: types.SET_ACCOUNT_TYPE_LIST,
    payload: {setAccountTypeList},
  });



export const fetchAccountTypes = () => async (dispatch, getState)  => {
  console.log("fetchAccountTypes", fetchAccountTypes)
  const def = getState().signIn.setAccountTypeList;
  console.log("def", def)
    try {

      const formatted = 1+def;
      return dispatch(setAccountTypeList(formatted));

  /////--------------------------------------------------------------

  // const variables = {
  //   "postId": "6858365ea0669c50eb2f644c"
  // };
  // return dispatch(
  //   ApiActions.fetchAsync(async.fetchAccountTypes, AccountBilling, variables),
  // ).then((response) => {
  //   console.log("RESPONSE", response)
  //   // return dispatch(setBillingRate(employer?.billingRate));
  // });


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
      
      // return dispatch(setBillingRate(employer?.billingRate));
    });

  }