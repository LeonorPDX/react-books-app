import React from 'react';

class Book extends React.Component {
    
    findBook() {
        let id = parseInt(this.props.match.params.id, 10);

        let book = this.props.books.find(book => book.id === id);

        return book;
    }
    
    buttonDisplay() {
        // if this book is in props.userBooks, show remove button. Else, show add button.
    }

    render() {

    let book = this.findBook()

    return (
        <div className="card">
            <div className="card-header">
                Book Details
            </div>

            <div className="card-body">
            <div className="row">
                <div className="col">
                    <img src={book ? book.img : null} alt={book ? book.title : null} />
                </div>
                <div className="col-8">
                    <h5 className="card-title">{book ? book.title : null}</h5>
                    <p className="card-text">{ book ? book.authors : null}</p>
                    <p className="card-text">{book ? book.description : null}</p>
                </div>
            </div>
                <a href="http://localhost:3000" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )};
};

export default Book;