// import moment from 'moment';
import types from './types';




const getPhoneInitialState = {
  setPhoneTypeList: [],
};

const initialState = {
  ...getPhoneInitialState,
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.SET_PHONE_TYPE_LIST: {
      const {setPhoneTypeList} = payload;
      return {
        ...state,
        setPhoneTypeList,
      };
    }
    default:
      return state;
    }
};
