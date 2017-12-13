/*
* https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react
* The first threee actions all return an "action". That JSON is referred to as an action
*
* The 4th action return a function through redux-thunk
*/

import { registerUserApi } from "../api"

export function userRegistrationHasErrored(message) {
    return {
        type : 'USER_REGISTRATION_HAS_ERRORED',
        hasErrored: message
    }
}

export function userRegistrationIsPending(bool) {
    return {
        type: 'USER_REGISTRATION_IS_PENDING',
        isPending: bool
    };
}

export function userRegistrationSuccess(bool) {
    return {
        type: 'USER_REGISTRATION_SUCCESS',
        success: bool
    };
}

export function registerUser(email, password) {
    console.log("email is "+email)
    console.log("pass is "+password)
    return (dispatch) => {
        dispatch(userRegistrationIsPending(true));

        registerUserApi(email, password)
            .then((response) => {
                dispatch(userRegistrationIsPending(false));
                if (!response.ok) {
                    dispatch(userRegistrationSuccess(false));
                    if(response.status === 409) {
                        // 409 means "conflict". The email is already taken. So, the user must login or provide a different email.
                        response.json().then((res) => {
                            dispatch(userRegistrationHasErrored(res.message))
                        })
                    }
                    else {
                        dispatch(userRegistrationHasErrored("Error registering. Please try again."))
                    }
                    throw Error(response.statusText)
                }

                return response;
            })
            .then((response) => response.json())
            .then(() => dispatch(userRegistrationSuccess(true)))
            .catch((e) => console.log("Error registaring user: "+e));
    };
}