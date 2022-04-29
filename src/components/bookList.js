/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import BookItem from './bookItem';
import InputBook from './input';
import './App.css';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="containte">
        <ul>
          {this.props.books.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              deleteBookProps={this.props.deleteBookProps}
            />
          ))}
        </ul>
        <InputBook />
      </div>
    );
  }
}

export default BookList;
