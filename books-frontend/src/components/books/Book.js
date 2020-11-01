import React, { Component } from 'react';


class Book extends Component {
    render() {
        return (
            <div>Book show page</div>
        )
    }

//  render() {
//    const { books, match } = this.props;
//    const book = books.find(b => b.id === match.params.id)
//
//    return (
//        <div class="card">
//            <div class="card-header">
//                Book Details
//            </div>
//
//            <div class="card-body">
//            <div class="row">
//                <div class="col">
//                    <img src={book.img} alt={book.title} />
//                </div>
//                <div class="col-6">
//                    <h5 class="card-title">{book.title}</h5>
//                    <p class="card-text">{book.authors}</p>
//                    <p class="card-text">{book.description}</p>
//                </div>
//            </div>
//                <a href="http://localhost:3000" class="btn btn-primary">Go somewhere</a>
//            </div>
//        </div>
//    );
//  }
};

export default Book;