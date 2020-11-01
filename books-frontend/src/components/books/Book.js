import React from 'react';

import Note from '../notes/Note';
import NoteInput from '../notes/NoteInput';

class Book extends React.Component {
    
    findBook() {
        let id = parseInt(this.props.match.params.id, 10);

        let book = this.props.books.find(book => book.id === id);

        return book;
    }
    
    renderNotes() {
        let book = this.findBook();

        if (book !== undefined) {
            return (
                book.notes.map(note => <Note key={note.id} note={note} />)
            )
        } else {
            return null
        }
    }

    render() {

    let book = this.findBook()

    console.log(this.props)

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

        <NoteInput />
        {this.renderNotes()}

        </div>
    )};
};

export default Book;