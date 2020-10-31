import React, { Component } from 'react';
import { connect } from 'react-redux';
//
//import Books from '../components/books/Books';
//import { fetchBooks } from '../actions/fetchBooks'
//import SearchBooks from '../components/books/SearchBooks';
//
class UsersContainer extends Component {

    //componentDidMount() {
    //    this.props.fetchBooks()
    //}

    render() {
        return (
        <div>
          Users Container, inside the render
        </div>
        )

    }
}
//
//const mapState = state => {
//  return {
//    books: state.books.displayBooks
//  }
//}
//
//function mapDispatch(d) {
//    return { 
//      fetchBooks: () => d(fetchBooks())
//    }
//}
//  
export default connect()(UsersContainer);