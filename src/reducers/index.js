import { combineReducers } from 'redux';
import { userRegistrationSuccess, userRegistrationHasErrored, userRegistrationIsPending } from './userRegistration';
import { userLoginSuccess, userLoginHasErrored, userLoginIsPending } from './userLogin';

export default combineReducers({
    userRegistrationSuccess,
    userRegistrationHasErrored,
    userRegistrationIsPending,
    
    userLoginSuccess,
    userLoginHasErrored,
    userLoginIsPending
});