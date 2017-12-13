/*
* https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react
* The first threee actions all return an "action". That JSON is referred to as an action
*
* The 4th action return a function through redux-thunk
*/

import { loginUserApi } from "../api"

export function userLoginHasErrored(message) {
    return {
        type : 'USER_LOGIN_HAS_ERRORED',
        hasErrored: message
    }
}

export function userLoginIsPending(bool) {
    return {
        type: 'USER_LOGIN_IS_PENDING',
        isPending: bool
    };
}

export function userLoginSuccess(bool) {
    return {
        type: 'USER_LOGIN_SUCCESS',
        success: bool
    };
}

export function loginUser(email, password) {
    console.log("email is "+email)
    console.log("pass is "+password)
    return (dispatch) => {
        dispatch(userLoginIsPending(true));

        loginUserApi(email, password)
            .then((response) => {
                dispatch(userLoginIsPending(false));
                if (!response.ok) {
                    console.log("***** GOT TO INSIDE RESPONSE *****"    )
                    dispatch(userLoginSuccess(false));
                     if(response.status === 400){ //400 code is an error likely means there is an internal status code that should be proccessed
                        response.json().then((res) => {
                            dispatch(userLoginHasErrored(res.message))
                        })
                    }
                    else {
                        dispatch(userLoginHasErrored("Sorry, there was an internal error. Please try again."));
                    }
                    //Throw this error so the catch is triggered and no further processing of the response is done
                    // throw Error(response.statusText)
                }

                return response;
            })
            .then((response) => response.json())
            .then(() => dispatch(userLoginSuccess(true)))
            .catch((e) => {
                dispatch(userLoginIsPending(false));
                console.log("Error logging in: "+e);
                }
            );
    };
}