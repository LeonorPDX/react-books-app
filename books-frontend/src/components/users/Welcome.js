import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signinUser } from '../../actions/signinUser'

class SignIn extends React.Component {

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
        this.props.signinUser(this.state.username);
        this.props.history.push('/books')
    }

    render() {

        return (
            <div>
                <br />
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
            <br />
            </div>
        )
    }

}

function mapDispatch(d) {
    return { 
      signinUser: (name) => d(signinUser(name))
    }
}
  
export default connect(null, mapDispatch)(withRouter(SignIn))