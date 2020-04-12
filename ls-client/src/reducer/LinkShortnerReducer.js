const LinkShortnerReducer = (state = {}, action) => {

    const newState = { ...state };
    
    switch (action.type) {
        case 'CREATE_LINK':
            return { ...newState, loading: true, isFeatched: false }
            break
        case 'CREATE_LINK_RESPONSE':
            return { ...newState, loading: false, isFeatched: true, response: action.data.json, action: action.type }
            break
        default:
            return newState
            break
    }
};

export default LinkShortnerReducer;