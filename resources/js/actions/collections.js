
export function getAllCollections() {
    return {
        type: 'GET_ALL_COLLECTIONS_START',
    }
};

export function getCollection(slug) {
    return {
        type: 'GET_COLLECTION_START',
        slug
    }
};
