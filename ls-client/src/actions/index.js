export const createLink = (data) => {
    return ({
        type: 'CREATE_LINK', data
    })
};

export const createLinkResponse = (data) => {
    return ({
        type: 'CREATE_LINK_RESPONSE', data
    })
};
