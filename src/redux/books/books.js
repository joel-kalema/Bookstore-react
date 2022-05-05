const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [
  {
    id: 1,
    category: 'Action',
    purcentage: 76,
    booktitle: 'Setup development environment',
    author: 'joseph',
    chapiter: 'Chapeter 07',
  },
  {
    id: 2,
    category: 'Science Function',
    purcentage: 40,
    booktitle: 'Develop website and add content',
    author: 'fonsi',
    chapiter: 'Chapeter 03',
  },
  {
    id: 3,
    category: 'Economi',
    purcentage: 3,
    booktitle: 'Deploy to live server',
    author: 'julle',
    chapiter: 'introduction',
  },
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});
export default booksReducer;
