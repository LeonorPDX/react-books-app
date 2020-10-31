import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  textDecoration: 'none',
  color: 'blue',
}

class NavBar extends React.Component {

    render() {
        return (  // make this into two columns, one on left with all books and my books, on the right the links to external resources (github, video, blog)
          <div className="container">
            <br />
            <a style={link} href="https://github.com/LeonorPDX/react-books-app">GitHub Repo</a>

            <NavLink to='/books' exact style={link} activeStyle={{ background: 'lightgrey' }}>All Books</NavLink>

            <NavLink to='/users' exact style={link} activeStyle={{ background: 'lightgrey' }}>My Books</NavLink>
          </div>
        )
    }
}

export default NavBar