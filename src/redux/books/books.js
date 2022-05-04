const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

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

export const addBook = (id, title, author) => ({
  type: ADD_BOOK,
  id,
  title,
  author,
});

export const removeBook = (id) => ({ type: REMOVE_BOOK, id });

export default booksReducer;
