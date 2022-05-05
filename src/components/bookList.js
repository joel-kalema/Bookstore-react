import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './bookItem';
import InputBook from './input';
import './App.css';

const BookList = ({ books }) => (
  <div className="containte">
    <ul>
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
        />
      ))}
    </ul>
    <InputBook />
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
    },
  )).isRequired,
};

export default BookList;
