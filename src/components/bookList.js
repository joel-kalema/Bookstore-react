import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookItem from './bookItem';
import InputBook from './input';
import { getBooksList } from '../redux/books/books';
import './App.css';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatch(getBooksList());
  }, [dispatch]);

  return (
    <div className="containte">
      <ul>
        {books
          ? books.map((book) => (
            <BookItem key={book.id} book={book} />
          ))
          : 'Loading...'}
      </ul>
      <InputBook />
    </div>
  );
};

export default BookList;
