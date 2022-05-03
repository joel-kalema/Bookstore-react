import ActionType from '../categorie/categories';

const initialState = [];
export const addBook = (books) => ({
  type: ActionType.ADD_BOOK,
  payload: books,
});

export const removeBook = (books) => ({
  type: ActionType.REMOVE_BOOK,
  payload: books,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_BOOK:
      return [...state, action.payload];

    case ActionType.REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export default booksReducer;
