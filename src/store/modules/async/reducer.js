import types from './types';

const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case types.STARTED: {
    const { id } = payload;
    return {
      ...state,
      [id]: {
        loading: true,
        hasErrors: false,
        errors: [],
      }
    };
  }
  case types.SUCCESS:
  case types.CLEAR_ERROR: {
    const { id } = payload;
    return {
      ...state,
      [id]: {
        loading: false,
        hasErrors: false,
        errors: [],
      }
    };
  }
  case types.ERROR: {
    const { id, errors = [] } = payload;
    return {
      ...state,
      [id]: {
        loading: false,
        hasErrors: true,
        errors,
      }
    };
  }
  default:
    return state;
  }
};
