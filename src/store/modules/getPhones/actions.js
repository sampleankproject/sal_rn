import types from "./types.js";
import FetchPhones from './query/FETCH_PHONES.js'
import {actions as ApiActions}  from '../api/index.js'
import async from "./async.js";




export const setPhoneTypeList = setPhoneTypeList => ({
    type: types.SET_PHONE_TYPE_LIST,
    payload: {setPhoneTypeList},
  });



  export const fetchPhoneType = () => async (dispatch, getState)  => {
    console.log("fetchPhoneType")
    // const def = getState().getPhones.setPhoneTypeList;
      try {
    const variables = {
      "keyword": "6858365ea0669c50eb2f644c"
    };
    return dispatch(
      ApiActions.fetchAsync(async.fetchPhoneType, FetchPhones, variables),
    ).then((response) => {
      console.log("RESPONSE-fetchPhoneType", response)
      return dispatch(setPhoneTypeList(response));
    });
      } catch (error) {
        console.log("ERROR", error)
      }
    };
  