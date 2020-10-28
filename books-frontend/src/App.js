import React from 'react';

class App extends React.Component {
  
  componentDidMount() {
    fetch('http://localhost:3000/api/v1/books')
    .then(resp => resp.json())
    .then(json => console.log(json))
  }
  
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
