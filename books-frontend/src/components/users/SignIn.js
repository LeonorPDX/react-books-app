import React from 'react';

class SignIn extends React.Component {

    render() {
        return (
            <div class="card text-center">
                <div class="card-header">
                    <a href="https://github.com/LeonorPDX/react-books-app">GitHub Repo</a>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Boss Books</h5>
                    <p class="card-text">Enter a Username to Get Started</p>
                    <form>
                        <input type="text" placeholder="Username" />
                    </form>
                </div>
                <div class="card-footer text-muted">
                    React Portfolio Project by Leonor Colbert
                </div>
            </div>
        )
    }

}

export default SignIn