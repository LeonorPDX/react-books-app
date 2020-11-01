import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import BooksContainer from './containers/BooksContainer';
import UsersContainer from './containers/UsersContainer';
import NavBar from './NavBar'

import { fetchUser } from './actions/fetchUser'



class App extends React.Component {
  state = {
    username: ""
  }

  handleOnChange(e) {
      this.setState({
          username: e.target.value
      })
  }

  handleOnSubmit(e) {
      e.preventDefault();
      this.props.fetchUser(this.state.username);
      this.props.history.push('/books')
  }

  renderSignin() {
    if (this.props.username === "") {
      return (
        <div className="card text-center">
            <div className="card-header">
                <a href="https://github.com/LeonorPDX/react-books-app">GitHub Repo</a>
            </div>
            <div className="card-body">
                <h5 className="card-title">Enter a Username to Get Started</h5>
                <form onSubmit={e => this.handleOnSubmit(e)}>
                    <input type="text" value={this.state.username} onChange={e => this.handleOnChange(e)} placeholder="Username" />
                </form>
            </div>
            <div className="card-footer text-muted">
                React Portfolio Project by Leonor Colbert
            </div>
        </div>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />

        {this.renderSignin()}

        <Switch>
          <Route path='/books' render={(routerProps) => <BooksContainer {...routerProps} />} />
          <Route path='/user/books' component={UsersContainer} />
        </Switch>
      </div>
    );
  }
}

function mapDispatch(d) {
  return { 
    fetchUser: (name) => d(fetchUser(name))
  }
}

const mapState = state => {
  return {
    username: state.user.username
  }
}

export default connect(mapState, mapDispatch)(withRouter(App))
