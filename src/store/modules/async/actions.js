import types from './types';

export const asyncStarted = id => ({
  type: types.STARTED,
  payload: {id},
});

export const asyncSuccess = id => ({
  type: types.SUCCESS,
  payload: {id},
});

export const asyncError = (id, errors) => ({
  type: types.ERROR,
  payload: {id, errors},
});

export const clearAsyncError = id => ({
  type: types.CLEAR_ERROR,
  payload: {id},
});

export const passthroughSuccess = (id, dispatch) => data => {
  dispatch(asyncSuccess(id));
  return data;
};

export const defaultErrorHandler =
  (id, dispatch, rethrow = false) =>
  error => {
    console.log("default handler:-",error)
    const errors = [
      {
        error,
        message: error ? error.message : 'An unexpected error occured',
      },
    ];
    // console.log("your errror:,",error)
    // Sentry.captureException(error);
    dispatch(asyncError(id, errors));

    if (rethrow) {
      throw error;
    }
  };
