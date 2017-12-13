export function userLoginHasErrored(state = "", action) {
    switch (action.type) {
        case 'USER_LOGIN_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function userLoginIsPending(state = false, action) {
    switch (action.type) {
        case 'USER_LOGIN_IS_PENDING':
            return action.isPending;

        default:
            return state;
    }
}

export function userLoginSuccess(state = false, action) {
    switch (action.type) {
        case 'USER_LOGIN_SUCCESS':
            return action.success;

        default:
            return state;
    }
}