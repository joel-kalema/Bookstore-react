import ActionType from '../categorie/categories';

const initialState = [];

export const addBook = (payload) => ({
  type: ActionType.ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: ActionType.REMOVE_BOOK,
  payload,
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
