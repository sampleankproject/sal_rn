
export const setAccountTypeList = setAccountTypeList => ({
    type: types.SET_ACCOUNT_TYPE_LIST,
    payload: {setAccountTypeList},
  });



export const fetchAccountTypes = () => async dispatch => {
    try {
      const {
        data: {workTypes},
      } = await dispatch(
        ApiActions.fetchAsync(async.fetchAccountTypes, WorkTypeQuery),
      );
      const formatted = workTypes.map(({id, label}) => ({id, value: label}));
      return dispatch(setAccountTypeList(formatted));
    } catch (error) {}
  };