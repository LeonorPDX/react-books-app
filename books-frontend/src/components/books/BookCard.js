import React, { Component } from 'react';


class BookCard extends Component {


  render() {
    const { book } = this.props;

    return (
        <div className="col mb-4">
            <div className="card h-100">
            <img src={book.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.authors}</p>
                <a href={`/books/${book.id}`} className="btn btn-primary">View Book</a>
            </div>
            </div>
        </div>
    );
  }
};

export default BookCard;