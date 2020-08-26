const collections = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ALL_COLLECTIONS_DONE':
            let { collections: all } = action;
            return {
                ...state,
                all
            };
        case 'GET_COLLECTION_DONE':
            let { collection: current } = action;
            return {
                ...state,
                current
            };
        default:
            return state;
    }
};

export default collections;
