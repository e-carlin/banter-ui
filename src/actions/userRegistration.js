/*
* https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react
* The first threee actions all return an "action". That JSON is referred to as an action
*
* The 4th action return a function through redux-thunk
*/

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

export function userRegistrationSuccess(response) {
    return {
        type: 'USER_REGISTRATION_SUCCESS',
        success: true
    };
}

export function registerUser() {
    return (dispatch) => {
        dispatch(userRegistrationIsPending(true));

        fetch('http://599167402df2f40011e4929a.mockapi.io/items' )
            .then((response) => {
                if (!response.ok) {
                    console.log("*****************")
                    console.log("In response.ok")
                    console.log(response)
                    console.log("*****************")
                    throw Error(response.statusText);
                }

                dispatch(userRegistrationIsPending(false));

                return response;
            })
            .then((response) => dispatch(userRegistrationSuccess(response)))
            .catch(() => dispatch(userRegistrationHasErrored(true)));
    };
}