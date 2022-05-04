import ActionType from '../categorie/categories';

const initialState = [
  {
    id: 1,
    categori: 'Action',
    purcentage: 18,
    title: 'Setup development environment',
    author: 'joseph',
    chapiter: 'Chapeter 07',
  },
  {
    id: 2,
    categori: 'Science Function',
    purcentage: 40,
    title: 'Develop website and add content',
    author: 'fonsi',
    chapiter: 'Chapeter 03',
  },
  {
    id: 3,
    categori: 'Economi',
    purcentage: 3,
    title: 'Deploy to live server',
    author: 'julle',
    chapiter: 'introduction',
  },
];

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
