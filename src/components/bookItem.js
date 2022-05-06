import React from 'react';
import './App.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const BookItem = ({ book }) => {
  const {
    title, id, category, author,
  } = book;
  const dispatch = useDispatch();
  return (
    <li key={id}>
      <div className="title-datas">
        <div>
          <h5>{category}</h5>
          <h4>{title}</h4>
          <p>{author}</p>
        </div>
        <div>
          <button type="button">comment</button>
          <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progresse">
        <CircularProgressbar value={60} text={`${60}%`} />
      </div>
      <div className="chapiter">
        <h4>Chapeter 03</h4>
        <p>4</p>
        <button type="button">UPDATE Progresse</button>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default BookItem;
