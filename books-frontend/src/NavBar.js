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
        return (
          <header>
            <div className="container">
              <br />              
              <div className="row">
                <div className="col">
                  <NavLink to='/books' exact style={link} activeStyle={{ background: 'lightgrey' }}>All Books</NavLink>
                  <NavLink to={`/users/${this.props.userId}/books`} exact style={link} activeStyle={{ background: 'lightgrey' }}>My Books</NavLink>
                </div>

                <div className="col">
                  <div className="text-right">
                  <a href="https://github.com/LeonorPDX/react-books-app" style={link}>GitHub Repo</a>
                  <a href="https://leonorpdx.github.io/react_and_redux_and_rails_oh_my" style={link}>Blog</a>
                  <a href="https://youtu.be/-XKY1mlPLbU" style={link}>Video</a>
                  </div>
                </div>
            </div>

            </div>
            
            <div className="container">
              <div className="row pt-5">
                <div className="col text-center">
                  <h1>Boss Books</h1>
                  <h4>Collect your books and your thoughts.</h4>
                  <br />
                </div>
              </div>
            </div>

        </header>
        )
    }
}

export default NavBar