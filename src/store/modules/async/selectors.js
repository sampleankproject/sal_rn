import isPlainObject from 'lodash/isPlainObject';

export const getAsyncResults = (state = {}, id) => {
  if (!isPlainObject(state?.async[id])) {
    return {
      loading: false,
      hasErrors: false,
      errors: [],
    };
  }
  return state?.async[id];
};
