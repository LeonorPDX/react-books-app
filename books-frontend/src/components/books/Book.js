import React from 'react';

import Notes from '../notes/Notes';
import NoteInput from '../notes/NoteInput';

class Book extends React.Component {
    
    findBook() {
        let id = parseInt(this.props.match.params.id, 10);

        let book = this.props.books.find(book => book.id === id);

        return book;
    }

    handleAddBook(e) {
        let book = this.findBook();
        let configObj = {
            user_id: this.props.user.id,
            book_id: book.id
        }
      
        this.props.addUserBook(configObj);
    }

    handleRemoveBook(e) {
        let book = this.findBook();
          
        this.props.removeUserBook(this.props.user.id, book.id);
    }
    
    renderButton() {
        let book = this.findBook();

        let foundBook = this.props.user.userBooks.find(b => b.id === book.id)

        if (foundBook !== undefined) {        
            return (
            <button className="btn btn-primary" onClick={e => this.handleRemoveBook(e)}>Remove Book</button>
            )
        } else {
            return (
            <button className="btn btn-primary" onClick={e => this.handleAddBook(e)}>Add Book</button>
            )
        }  
    }
    
    renderNotes() {
        let book = this.findBook();

        let foundBook = this.props.user.userBooks.find(b => b.id === book.id)

        if (foundBook !== undefined) {        
            return (
            <div>
                <br />
                <Notes book={book} notes={this.props.user.userNotes} />
                <br />                    
                <NoteInput userId={this.props.user.id} bookId={book.id} addNote={this.props.addNote} />
            </div>
            )
        } else {
            return null
        }
    
    }

    render() {

    let book = this.findBook()
    
    return (
        <div className="container">

        <div className="card">
            <div className="card-header">
                Book Details
            </div>

            <div className="card-body">
            <div className="row">
                <div className="col">
                    <img src={book ? book.img : null} alt={book ? book.title : null} />
                    <br /><br />
                    {book ? this.renderButton() : null}
                </div>
                <div className="col-8">
                    <h5 className="card-title">{book ? book.title : null}</h5>
                    <p className="card-text">{ book ? book.authors : null}</p>
                    <p className="card-text">{book ? book.description : null}</p>
                </div>
            </div>
            </div>
        </div>
        {book ? this.renderNotes() : null}
        </div>
    )};
};

export default Book;