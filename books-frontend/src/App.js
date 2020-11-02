import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import BooksContainer from './containers/BooksContainer';
import UsersContainer from './containers/UsersContainer';
import NavBar from './NavBar';
import Welcome from './components/users/Welcome';

import { fetchUser } from './actions/fetchUser'



class App extends React.Component {

  componentDidMount() {
    this.props.fetchUser()
  }

  render() {

    return (
      <div className="App">
        <NavBar />

        <Switch>
          <Route path='/books' render={(routerProps) => <BooksContainer {...routerProps} />} />
          <Route path='/user/books' component={UsersContainer} />
          <Route exact path='/' component={Welcome} />
        </Switch>
      </div>
    );
  }
}



export default connect(null, { fetchUser })(App)
