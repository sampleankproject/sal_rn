const initialRequestState = {isLoading: false, hasError: false, error: null};

export const getApiRequestState = (state, label) =>
  state.api[label] || initialRequestState;

export const getApiRequestErrorMatch = (
  state,
  label,
  errorCode,
  errorType = 'gql',
) => {
  const {error} = state.api[label] || initialRequestState;

  if (!error) {
    return null;
  }

  if (errorType === 'gql') {
    if (!error.graphQLErrors || error.graphQLErrors.length === 0) {
      return null;
    }

    return error.graphQLErrors.find(({extensions}) => {
      if (!extensions || !extensions.code) {
        return false;
      }

      return extensions.code === errorCode;
    });
  }

  if (errorType === 'network') {
    return null;
  }

  return null;
};
