import types from './types';

export const fetch = (label, gql, variables, onSuccess, onFailure) => ({
  type: types.GRAPHQL_REQUEST,
  payload: {
    label,
    variables,
    [gql.definitions[0].operation]: gql,
    onSuccess,
    onFailure,
  },
});

export const fetchAsync = (label, gql, variables) => dispatch =>
  new Promise((resolve, reject) => {
    console.log('HEREEeeeeee_label', label)
    console.log('HEREEeeeeee_gql', gql)
    console.log('HEREEeeeeee_variables', variables)
    dispatch(
      fetch(
        label,
        gql,
        variables,
        data => () => resolve(data),
        err => () => reject(err),
      ),
    ).catch(e=>{console.log("catch in fetchAsync:-");});
  });

export const start = label => ({
  type: types.GRAPHQL_START,
  payload: {label},
});

export const end = label => ({
  type: types.GRAPHQL_END,
  payload: {label},
});

export const error = (label, err) => ({
  type: types.GRAPHQL_ERROR,
  payload: {label, error: err},
});

export const clearError = () => ({
  type: types.GRAPHQL_CLEAR_ERROR,
});
