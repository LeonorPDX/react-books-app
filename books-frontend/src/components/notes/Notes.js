import React, { Component } from 'react';
import Note from './Note';

// Takes all the user's notes and the book. Filter notes by book, then render note for each with book title

class Notes extends Component {

    renderNotes() {
        let filteredNotes = this.props.notes.filter(n => n.book_id === this.props.book.id)
        return (
            filteredNotes.map(note => <Note key={note.id} note={note} bookTitle={this.props.book.title} />)
        )
    }

    render() {

        return(
        <div className="container">            
            <h4>Notes</h4>
            
            {this.renderNotes()}
        </div>
        );
    }
};

export default Notes;