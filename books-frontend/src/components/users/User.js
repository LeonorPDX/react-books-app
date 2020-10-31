import React from 'react';

import BookCard from '../books/BookCard'

class User extends React.Component {

    render() {
        return (
            <div className="container">
        
            <h4>{this.props.user.username}'s Books</h4>
            <div className="row row-cols-1 row-cols-md-4">
                {this.props.user.userBooks.map(book => <BookCard key={book.id} book={book} />)}
            </div>
    
          </div>
        )
    }

}

export default User