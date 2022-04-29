/* eslint-disable react/destructuring-assignment */
import React from 'react';
import BookList from './bookList';

class BookContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
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
          purcentage: 85,
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
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <BookList
          books={this.state.books}
          deleteBookProps={this.delBook}
        />
      </div>
    );
  }
}

export default BookContainer;
