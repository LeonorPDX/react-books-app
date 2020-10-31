import React from 'react';
import { Route } from 'react-router-dom';

import BooksContainer from './containers/BooksContainer';
import UsersContainer from './containers/UsersContainer';
import NavBar from './NavBar';
import SignIn from './components/users/SignIn'


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <header>
          <NavBar />
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

        <main>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/books" component={BooksContainer} />
          <Route exact path="/users" component={UsersContainer} />
        </main>

      </div>
    );
  }
}

export default App;
