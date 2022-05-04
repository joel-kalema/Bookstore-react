/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useSelector } from 'react-redux';
import BookList from './bookList';

const BookContainer = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <div className="App">
      <BookList
        books={books}
      />
    </div>
  );
};

export default BookContainer;
