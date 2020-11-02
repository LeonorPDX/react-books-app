import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Books from '../components/books/Books';
import { fetchBooks } from '../actions/fetchBooks';
import { addNote } from '../actions/addNote';
import { addUserBook } from '../actions/addUserBook';
import Book from '../components/books/Book';


class BooksContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        return (
        <div>
          <Switch>
            <Route path={`${this.props.match.url}/:id`} render={(routerProps) => <Book {...routerProps} books={this.props.books} user={this.props.user} addNote={this.props.addNote} addUserBook={this.props.addUserBook} />}/>
            <Route path='/books' render={(routerProps) => <Books {...routerProps} books={this.props.books} user={this.props.user} />} />  
          </Switch>        
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
    addUserBook: (userBook) => dispatch(addUserBook(userBook))
  }
}

  
export default connect(mapState, mapDispatch)(BooksContainer);