const books = (state = {}, action) => {
    switch (action.type) {
        case 'GET_BOOKS_DONE':
            let { books: all } = action;
            return {
                ...state,
                all
            };
        case 'GET_BOOK_DONE':
            let { book: current } = action;
            return {
                ...state,
                current
            };
        default:
            return state;
    }
};

export default books;
