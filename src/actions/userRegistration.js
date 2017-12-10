/*
* https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react
* The first threee actions all return an "action". That JSON is referred to as an action
*
* The 4th action return a function through redux-thunk
*/

import { registerUserApi } from "../api"

export function userRegistrationHasErrored(bool) {
    console.log("ERRROR")
    return {
        type: 'USER_REGISTRATION_HAS_ERRORED',
        hasErrored: bool
    };
}

export function userRegistrationIsPending(bool) {
    return {
        type: 'USER_REGISTRATION_IS_PENDING',
        isPending: bool
    };
}

export function userRegistrationSuccess() {
    return {
        type: 'USER_REGISTRATION_SUCCESS',
        success: true
    };
}

export function registerUser(email, password) {
    console.log("email is "+email)
    console.log("pass is "+password)
    return (dispatch) => {
        dispatch(userRegistrationIsPending(true));

        registerUserApi(email, password)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(userRegistrationIsPending(false));

                return response;
            })
            .then(() => dispatch(userRegistrationSuccess()))
            .catch(() => dispatch(userRegistrationHasErrored(true)));
    };
}