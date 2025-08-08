// import moment from 'moment';
import types from './types';




const postJobInitialState = {
  address: "",
  workersNeeded: null,
  setAccountTypeList: [],
  addAccountTypesData: [],
  
};

const initialState = {
  ...postJobInitialState,
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.SET_ACCOUNT_TYPE_LIST: {
      const {setAccountTypeList} = payload;
      return {
        ...state,
        setAccountTypeList,
      };
    }

    case types.SET_ACCOUNT_TYPE_DATA: {
      const {addAccountTypesData} = payload;
      return {
        ...state,
        addAccountTypesData,
      };
    }
    default:
      return state;
    }
};
