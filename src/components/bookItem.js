/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './App.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class BookItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <li>
        <div className="title-datas">
          <div>
            <h5>{this.props.book.categori}</h5>
            <h4>{this.props.book.title}</h4>
            <p>{this.props.book.author}</p>
          </div>
          <div>
            <button type="button">comment</button>
            <button type="button">Remove</button>
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="progresse">
          <CircularProgressbar value={this.props.book.purcentage} text={`${this.props.book.purcentage}%`} />
        </div>
        <div className="chapiter">
          <h4>Current Chapiter</h4>
          <p>{this.props.book.chapiter}</p>
          <button type="button">UPDATE Progresse</button>
        </div>
      </li>
    );
  }
}

export default BookItem;
