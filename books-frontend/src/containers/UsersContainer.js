import React, { Component } from 'react';
import { connect } from 'react-redux';


import User from '../components/users/User';
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
          <User user={this.props.user} />
        </div>
        )

    }
}

const mapState = state => {
  return {
    user: state.user
  }
}

//function mapDispatch(d) {
//    return { 
//      fetchBooks: () => d(fetchBooks())
//    }
//}
 
export default connect(mapState)(UsersContainer);