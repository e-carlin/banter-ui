import { combineReducers } from 'redux';
import { userRegistration, userRegistrationHasErrored, userRegistrationIsPending } from './registration';

export default combineReducers({
    userRegistration,
    userRegistrationHasErrored,
    userRegistrationIsPending
});