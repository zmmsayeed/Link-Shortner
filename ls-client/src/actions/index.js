export const callApi = (data) => {
    return ({
        type: 'YOUR_ACTION_KEY_TO_TRIGGER_SAGA_API', data
    })
};

export const receiveApi = (data) => {
    return ({
        type: 'YOUR_ACTION_KEY_WHICH_WIIL_BE_TRIGGERED_BY_SAGA', data
    })
};
