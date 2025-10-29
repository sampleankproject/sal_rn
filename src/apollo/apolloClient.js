import {
    ApolloClient,
    InMemoryCache,
    ApolloLink,
    HttpLink,
  } from '@apollo/client';
  // import {URI} from '@env';
  import React, {useState} from 'react';
  import { useDispatch, useSelector, shallowEqual } from 'react-redux';
  import {RetryLink} from '@apollo/client/link/retry';
  import {setContext} from '@apollo/client/link/context';
  import {createUploadLink} from 'apollo-upload-client';
  import {actions as AuthActions} from '../store/modules/auth';
  
  import {store} from '../store/store';
  import { URI } from '../api/urls';
  // import FetchProfile from '../graphQL/query/FETCH_PROFILE.graphql'
  import * as Keychain from "react-native-keychain";
import async from '../store/modules/signIn/async';

import {actions as signInActions,
  selectors as SignInSelectors,
} from '../store/modules/signIn';


  const getApolloClient = (options = {}) => {

    console.log("GET_AOLLO_CLIENT", options)
    const httpLink = new HttpLink({uri: URI});

    
  
 
  
    const recoveryLink = new RetryLink({
      delay: {
        initial: 0,
      },
      attempts: {
        max: 2,
        retryIf: async error => {
          if (error.statusCode === 401) {
            try {
              // await store.dispatch(AuthActions.refreshCredentials());
              return true;
            } catch (e) {
              // return store.dispatch(AuthActions.logOut());
            }
          }
          return false;
        },
      },
    });
  
    const authLink = setContext((_, {headers}) => {
  
      // const getUserTokenValue = useSelector(SignInSelectors.getUserToken, shallowEqual);
      // const { accessToken } = store.getState().auth;
      const getUserTokenValue = store.getState().signIn.setUserToken
      console.log("getUserTokenValue_BBBBBBB",getUserTokenValue);
      //   return {
      //   headers: {
      //     ...headers,
      //     // authorization: accessToken ? `Bearer ${accessToken}` : '',
      //     authorization: tokenValue.password ? tokenValue.password : '',
      //   },
      // };

    //  const  tokenValueFunction = async() =>{
    //     const tokenValueAwait = await Keychain.getGenericPassword()
    //     console.log("AAAAAA_value", tokenValueAwait)
    //     return tokenValueAwait.password
    //   }
      
  

      // const awaitTokenValue = async()  => await tokenValueFunction()

      // console.log("awaitTokenValue", tokenValueFunction())

      // const getUserTokenValue = getUserToken()
      // console.log("authLink_headers", headers);
      // console.log("authLink_getUserToken", getUserTokenValue1());
      // console.log("authLink_getUserToken.Password", getUserTokenValue.password);
      // console.log("authLink_token.password", tokenCredentialsId.password)
      // const {accessToken} = store.getState()?.auth;
      // console.log("authlink_setContext_tokenValue", awaitTokenValue())


      return {
        headers: {
          ...headers,
          // authorization: accessToken ? `Bearer ${accessToken}` : '',
          authorization: getUserTokenValue ? getUserTokenValue : '',
        },
      };
    });
  
    const client = new ApolloClient({
      link: ApolloLink.from([recoveryLink, authLink, httpLink]),
      cache: new InMemoryCache(),
      defaultOptions: {
        query: {
          fetchPolicy: 'no-cache',
        },
        ...options,
      },
    });
  
    // const uploadLink = createUploadLink({
    //   uri: "http://localhost:3000/graphql",
    // });
  
    // const clientFileUpload = new ApolloClient({
    //   cache: new InMemoryCache(),
    //   link: ApolloLink.from([authLink, 
    //     // uploadLink
    //   ]),
    // });
  
    return {client};
  };
  
  const client = getApolloClient().client;
  
  export default client;
  export const fileUploadClient = getApolloClient().clientFileUpload;
  