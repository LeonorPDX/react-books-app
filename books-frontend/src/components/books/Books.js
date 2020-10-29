import React, { Component } from 'react';
import BookCard from './BookCard';

class Books extends Component {

  render() {
    return(
      <div>
        <ul>
        {this.props.books.map(book => <BookCard key={book.id} book={book} />)}
        </ul>
      </div>
    );
  }
};

export default Books;