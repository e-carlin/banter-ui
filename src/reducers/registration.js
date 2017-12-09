export function userRegistrationHasErrored(state = false, action) {
    switch (action.type) {
        case 'USER_REGISTRATION_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function userRegistrationIsPending(state = false, action) {
    switch (action.type) {
        case 'USER_REGISTRATION_IS_PENDING':
            return action.isPending;

        default:
            return state;
    }
}

export function userRegistrationSuccess(state = false, action) {
    switch (action.type) {
        case 'USER_REGISTRATION_SUCCESS':
            return action.success;

        default:
            return state;
    }
}