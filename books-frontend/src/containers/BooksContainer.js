import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Books from '../components/books/Books';
import { fetchBooks } from '../actions/fetchBooks'
import Book from '../components/books/Book';
import NavBar from '../NavBar'
import UsersContainer from './UsersContainer';
import SignIn from '../components/users/SignIn'


class BooksContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        return (
        <div>
          <NavBar />
          <Switch>
            <Route path='/books/:id' render={(routerProps) => <Book {...routerProps} books={this.props.books}/>}/>
            <Route path='/books' render={(routerProps) => <Books {...routerProps} books={this.props.books}/>}/>
            <Route path='/users' component={UsersContainer} />
            <Route exact path='/' component={SignIn} />
          </Switch>
        </div>
        )

    }
}

const mapState = state => {
  return {
    books: state.books.displayBooks
  }
}

function mapDispatch(d) {
    return { 
      fetchBooks: () => d(fetchBooks())
    }
}
  
export default connect(mapState, mapDispatch)(BooksContainer);