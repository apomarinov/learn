const collections = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_COLLECTIONS_DONE':
            let { collections } = action;
            return collections;
        default:
            return state;
    }
};

export default collections;
