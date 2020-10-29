import React, { Component } from 'react';
import BookCard from './BookCard';

class Books extends Component {

  render() {
    return(
        <div class="row row-cols-1 row-cols-md-4">
            {this.props.books.map(book => <BookCard key={book.id} book={book} />)}
        </div>
    );
  }
};

export default Books;