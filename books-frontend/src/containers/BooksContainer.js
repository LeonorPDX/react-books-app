import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Books from '../components/books/Books';
import { fetchBooks } from '../actions/fetchBooks'
import Book from '../components/books/Book';


class BooksContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        return (
        <div>

          <Route exact path='/books' render={(routerProps) => <Books {...routerProps} books={this.props.books} user={this.props.user} />} />  
          <Route path='/books/:id' render={(routerProps) => <Book {...routerProps} books={this.props.books} user={this.props.user} />}/>
                    
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

function mapDispatch(d) {
    return { 
      fetchBooks: () => d(fetchBooks())
    }
}
  
export default connect(mapState, mapDispatch)(BooksContainer);