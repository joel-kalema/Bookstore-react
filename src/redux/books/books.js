import ActionType from '../categorie/categories';

export const addBook = (books) => ({
  type: ActionType.ADD_BOOK,
  payload: books,
});

export const removeBook = (books) => ({
  type: ActionType.REMOVE_BOOK,
  payload: books,
});
