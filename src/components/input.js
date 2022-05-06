import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/books';

const InputBook = () => {
  const [inputValues, setInputValues] = useState({
    title: '',
    author: '',
    id: '',
    category: '',
  });
  const dispatch = useDispatch();
  const [errorMsg, setError] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const { title, author, category } = inputValues;
    const newBook = {
      id,
      title,
      author,
      category,
    };

    if (newBook.title.trim().length === 0) {
      setError('Please add Book title to submit...');
      setInputValues(newBook);
    } else if (newBook.category === '') {
      setError('Please select Book Category to submit...');
      setInputValues(newBook);
    } else {
      setError('');
      dispatch(postBook(newBook));
      setInputValues({
        title: '',
        author: '',
        id: '',
        category: '',
      });
    }
  };

  const onChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form">
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={submitBookToStore}>
        <input type="text" placeholder="Add title..." name="title" onChange={onChange} required />
        <input type="text" placeholder="Add author..." name="author" onChange={onChange} required />
        <select placeholder="categories" name="category" onChange={onChange} required>
          <option value="">Category</option>
          <option value="Romance">Romance</option>
          <option value="Documentary">Documentary</option>
          <option value="Fiction">Fiction</option>
          <option value="Crime">Crime</option>
        </select>
        <button type="submit" onClick={submitBookToStore}>Submit</button>
      </form>
      <small>{errorMsg}</small>
    </div>
  );
};

export default InputBook;
