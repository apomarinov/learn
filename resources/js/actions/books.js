
export function getBooks(collection) {
    return {
        type: 'GET_BOOKS_START',
        collection
    }
};

export function getBook(collection, slug) {
    return {
        type: 'GET_BOOK_START',
        collection,
        slug
    }
};
