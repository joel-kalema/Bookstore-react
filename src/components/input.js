import React from 'react';
import './App.css';

const InputBook = () => (
  <div className="form">
    <h3>ADD NEW BOOK</h3>
    <form>
      <input type="text" placeholder="Add title..." />
      <input type="text" placeholder="Add author..." />
      <button type="button">Submit</button>
    </form>
  </div>
);

export default InputBook;
