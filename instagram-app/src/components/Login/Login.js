import React from 'react';

class Login extends React.Component {
    state = {
        isLoggedIn: false,
        username: '',
        // password: ''
    }

    onLogin = e => {
        if(JSON.parse(localStorage.getItem('loggedIn'))) {
            localStorage.removeItem('loggedIn');
            this.setState({
                isLoggedIn: false
            })
        } else {
            localStorage.setItem('loggedIn', JSON.stringify({ isLoggedIn: true }));
            localStorage.setItem('userLoggedIn', `${this.state.username}`)
            this.setState({
                isLoggedIn: true
            })
        }
    }

    onUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    // onPasswordChange = event => {
    //     this.setState({
    //         password: event.target.value
    //     })
    // }

    render() {
        return (
            <form onSubmit={this.onLogin}>
                <input type="text" placeholder="username" value={this.state.username} onChange={this.onUsernameChange} required/>
                <input type="password" placeholder="password" required/>
                <button>Login</button>
            </form>
        );
    }
}

export default Login;