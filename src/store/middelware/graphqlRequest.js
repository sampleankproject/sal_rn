import {types as ApiTypes, actions as ApiActions} from '../modules/api';
import ApolloClient from '../../apollo/apolloClient';

export default ({dispatch}) =>
  next =>
  async action => {
    console.log("graphqlRequest.js ACTION", action)
    next(action);

    if (action.type !== ApiTypes.GRAPHQL_REQUEST) {
      return;
    }

    const {label, query, mutation, variables, onSuccess, onFailure} =
      action.payload;

    if (query && mutation) {
      throw new Error('Can not try and query and mutate at the same time');
    }

    if (label) {
      console.log("label",label)
      dispatch(ApiActions.start(label));
    }

    const caller = query ? ApolloClient.query : ApolloClient.mutate;
    const requestParams = query ? {query, variables} : {mutation, variables};
    try {
      const data = await caller(requestParams);
      if (onSuccess) {
        console.log("success")
        dispatch(onSuccess(data));
      }
    } catch (error) {
      console.log("error graphql:-",error,label,"fail",onFailure)
      if (label) {
        console.log("error label",label,error)
        dispatch(ApiActions.error(label, error));
      }
      if (onFailure) {
        console.log("onFailure",error);
        dispatch(onFailure(error));
      }
    } finally {
      if (label) {
        // console.log("finally",label);
        dispatch(ApiActions.end(label));
      }
    }
  };
