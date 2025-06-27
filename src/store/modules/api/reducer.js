import types from './types';

const initialState = {};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case types.GRAPHQL_START: {
      const {label} = payload;
      if (label) {
        return {
          ...state,
          [label]: {
            isLoading: true,
            hasError: false,
          },
        };
      }

      return state;
    }
    case types.GRAPHQL_ERROR: {
      const {label, error} = payload;
      if (label) {
        return {
          ...state,
          [label]: {
            ...state[label],
            error,
            hasError: true,
          },
        };
      }

      return state;
    }
    case types.GRAPHQL_END: {
      const {label} = payload;
      if (label) {
        return {
          ...state,
          [label]: {
            ...state[label],
            isLoading: false,
          },
        };
      }

      return state;
    }
    case types.GRAPHQL_CLEAR_ERROR: {
      return {
        state: initialState,
      };
    }
    default:
      return state;
  }
};
