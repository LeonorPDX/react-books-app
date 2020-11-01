import React, { Component } from 'react';
import BookCard from './BookCard';
import SearchBooks from './SearchBooks';

class Books extends Component {


  render() {

    return(
      <div className="container">
        <SearchBooks books={this.props.books} />
        
        <h4>All Books</h4>
        <div className="row row-cols-1 row-cols-md-4">
            {this.props.books.map(book => <BookCard key={book.id} book={book} />)}
        </div>

      </div>
    );
  }
};

export default Books;