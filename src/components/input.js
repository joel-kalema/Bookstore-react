import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const InputBook = () => {
  const [inputValues, setInputValues] = useState({
    booktitle: '',
    author: '',
    category: '',
  });
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    const { booktitle, category, author } = inputValues;
    e.preventDefault();
    const id = uuidv4();
    const newBook = {
      id,
      booktitle,
      author,
      category,
    };
    if (booktitle.trim() && author.trim()) {
      dispatch(addBook(newBook));
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    if (e.target.value.trim()) {
      setInputValues({
        ...inputValues,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <form onSubmit={submitBookToStore} className="form">
      <input type="text" placeholder="Add title..." name="booktitle" onChange={onChange} required />
      <input type="text" placeholder="Add author..." name="author" onChange={onChange} required />
      <select placeholder="categories" name="category" onChange={onChange} required>
        <option value="Romance">Romance</option>
        <option value="Documentary">Documentary</option>
        <option value="Fiction">Fiction</option>
        <option value="Crime">Crime</option>
      </select>
      <button type="submit" onClick={submitBookToStore}>Submit</button>
    </form>
  );
};

export default InputBook;
