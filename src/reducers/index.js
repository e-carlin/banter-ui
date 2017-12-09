import { combineReducers } from 'redux';
import { userRegistrationSuccess, userRegistrationHasErrored, userRegistrationIsPending } from './registration';

export default combineReducers({
    userRegistrationSuccess,
    userRegistrationHasErrored,
    userRegistrationIsPending
});