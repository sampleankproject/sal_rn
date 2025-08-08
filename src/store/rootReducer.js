import { combineReducers } from 'redux';


import signIn from './modules/signIn';
import getPhones from './modules/getPhones';

export default combineReducers({
signIn,
getPhones,
});
