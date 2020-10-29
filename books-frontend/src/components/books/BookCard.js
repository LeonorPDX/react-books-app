import React, { Component } from 'react';


class BookCard extends Component {


  render() {
    const { book } = this.props;

    return (
        <div class="col mb-4">
            <div class="card h-100">
            <img src={book.img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{book.title}</h5>
                <p class="card-text">{book.authors}</p>
                <a href="http:/localhost:3000" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
    );
  }
};

export default BookCard;