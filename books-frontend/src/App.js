import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BooksContainer from './containers/BooksContainer';
import UsersContainer from './containers/UsersContainer';
import NavBar from './NavBar'
import Welcome from './components/users/Welcome'


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/books' component={BooksContainer} />
          <Route path='/user/books' component={UsersContainer} />
          <Route exact path='/' component={Welcome} />
        </Switch>
      </div>
    );
  }
}

export default App;
