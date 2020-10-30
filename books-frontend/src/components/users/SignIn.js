import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../../actions/fetchUser'

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
        this.props.fetchUser(this.state.username)
    }

    render() {
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
    }

}

function mapDispatch(d) {
    return { 
      fetchUser: (name) => d(fetchUser(name))
    }
}
  
export default connect(null, mapDispatch)(SignIn)