import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Books from '../components/books/Books';
import { fetchBooks } from '../actions/fetchBooks';
import { addNote } from '../actions/addNote';
import { deleteNote } from '../actions/deleteNote';
import { addUserBook } from '../actions/addUserBook';
import Book from '../components/books/Book';
import { removeUserBook } from '../actions/removeUserBook';


class BooksContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        return (
        <div>
          <Route path={`${this.props.match.url}/:id`} render={(routerProps) => <Book {...routerProps} books={this.props.books} user={this.props.user} addNote={this.props.addNote} deleteNote={this.props.deleteNote} addUserBook={this.props.addUserBook} removeUserBook={this.props.removeUserBook} />}/>
          <Route exact path='/books' render={(routerProps) => <Books {...routerProps} books={this.props.books} user={this.props.user} />} />         
        </div>
        )

    }
}

const mapState = state => {
  return {
    books: state.books,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return { 
    fetchBooks: () => dispatch(fetchBooks()),
    addNote: (note) => dispatch(addNote(note)),
    deleteNote: (id) => dispatch(deleteNote(id)),
    addUserBook: (userBook) => dispatch(addUserBook(userBook)),
    removeUserBook: (userId, bookId) => dispatch(removeUserBook(userId, bookId))
  }
}

  
export default connect(mapState, mapDispatch)(BooksContainer);