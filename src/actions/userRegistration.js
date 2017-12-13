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
            if(response.ok) {
                dispatch(userRegistrationSuccess(true));
                return;
            }
            else {
                throw response;
            }
        })
        .catch((response) => {
            dispatch(userRegistrationIsPending(false))
            if(response.status === 400 || response.status === 409){ //400 code is an error likely means there is an internal status code that should be proccessed
                response.json().then((res) => {
                dispatch(userRegistrationHasErrored(res.message))
                dispatch(userRegistrationSuccess(false))
                })
            }
            else {
                dispatch(userRegistrationHasErrored("There was an error registering. Please try again."))
                //TODO: More in depth error handling
                console.log("ERROR: "+response)
            }
        })
        }
    }

// export function registerUser(email, password) {
//     console.log("email is "+email)
//     console.log("pass is "+password)
//     return (dispatch) => {
//         dispatch(userRegistrationIsPending(true));

//         registerUserApi(email, password)
//             .then((response) => {
//                 dispatch(userRegistrationIsPending(false));
//                 if (!response.ok) {
//                     dispatch(userRegistrationSuccess(false));
//                      if(response.status === 400 || response.status === 409){ //400 code is an error likely means there is an internal status code that should be proccessed
//                         response.json().then((res) => {
//                             dispatch(userRegistrationHasErrored(res.message))
//                         })
//                     }
//                     else {
//                         dispatch(userRegistrationHasErrored("Sorry, there was an internal error. Please try again."));
//                     }
//                     //Throw this error so the catch is triggered and no further processing of the response is done
//                     throw Error(response.statusText)
//                 }

//                 return response;
//             })
//             // .catch((e) => console.log("Error in the request"))
//             .then((response) => response.json())
//             .then(() => dispatch(userRegistrationSuccess(true)))
//             .catch((e) => {
//                 dispatch(userRegistrationIsPending(false));
//                 dispatch(userRegistrationHasErrored("In catch"))
//                 console.log("Error registaring user: "+e);
//             })
//     };
// }