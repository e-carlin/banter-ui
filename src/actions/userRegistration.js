/*
* https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react
* The first threee actions all return an "action". That JSON is referred to as an action
*
* The 4th action return a function through redux-thunk
*/

export function userRegistrationHasErrored(bool) {
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

export function userRegistrationSuccess(bool) {
    return {
        type: 'USER_REGISTRATION_SUCCESS',
        registration: bool
    };
}

export function registerUser() {
    return (dispatch) => {
        dispatch(userRegistrationIsPending(true));

        fetch('http://599167402df2f40011e4929a.mockapi.io/items' )
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(userRegistrationIsPending(false));

                return response;
            })
            .then((response) => response.json())
            .then((registration) => dispatch(userRegistrationSuccess(registration)))
            .catch(() => dispatch(userRegistrationHasErrored(true)));
    };
}