import React from 'react';
import { connect } from 'react-redux'

import { fetchBooks } from './actions/fetchBooks'

class App extends React.Component {
  
  componentDidMount() {
    this.props.fetchBooks()
  }
  
  render() {
    return (
      <div className="App">
        <h1>Boss Books</h1>
        <h3>Navigation bar here in App Container</h3>
      </div>
    );
  }
}

function mapState(state){
  return state
}

function mapDispatch(d) {
  return { 
    fetchBooks: () => d(fetchBooks())
  }
}

export default connect(mapState, mapDispatch)(App);
