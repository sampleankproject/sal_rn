import {
    ApolloClient,
    InMemoryCache,
    ApolloLink,
    HttpLink,
  } from '@apollo/client';
  // import {URI} from '@env';
  import {RetryLink} from '@apollo/client/link/retry';
  import {setContext} from '@apollo/client/link/context';
  import {createUploadLink} from 'apollo-upload-client';
  import {actions as AuthActions} from '../store/modules/auth';
  
  import {store} from '../store/store';
  import { URI } from '../api/urls';
  // import FetchProfile from '../graphQL/query/FETCH_PROFILE.graphql'
  
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
      // const {accessToken} = store.getState()?.auth;
      return {
        headers: {
          ...headers,
          // authorization: accessToken ? `Bearer ${accessToken}` : '',
          authorization: '',
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
  