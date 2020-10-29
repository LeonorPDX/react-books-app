import React from 'react';

import BooksContainer from './containers/BooksContainer';


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <header>
        <nav className="navbar navbar-expand-lg">

        <div className="container">

          <a className="navbar-brand" href="http://localhost:3000">Boss Books</a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="basicExampleNav">

            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="http://localhost:3000">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000">Pricing</a>
              </li>

            </ul>

            <form className="form-inline">
              <div className="md-form my-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
              </div>
            </form>
          </div>
        </div>
        </nav>
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
          <BooksContainer />
        </main>

      </div>
    );
  }
}

export default App;
