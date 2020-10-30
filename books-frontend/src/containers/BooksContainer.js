import React, { Component } from 'react';
import { connect } from 'react-redux';

import Books from '../components/books/Books';
import { fetchBooks } from '../actions/fetchBooks'

class BooksContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        return (
        <div>
          <Books books={this.props.books} />
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