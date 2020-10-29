import React, { Component } from 'react';


class BookCard extends Component {


  render() {
    const { book } = this.props;

    return (
      <div>
        <li>
          {book.title}
        </li>
      </div>
    );
  }
};

export default BookCard;