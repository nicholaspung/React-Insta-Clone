import React from 'react';

// const withAuthenticate = Component => props => {
//     return <Component />
// }

const withAuthenticate = FirstComponent => SecondComponent =>
    class extends React.Component {
        state = {
            loggedIn: false
        }

        componentDidMount() {
            if (localStorage.getItem('loggedIn')) {
                this.setState({
                    loggedIn: true
                })
            } else {
                this.setState({
                    loggedIn: false
                })
            }
        }

        render() {
            if (this.state.loggedIn) {
                return <FirstComponent />
            } else {
                return <SecondComponent />;
            }
        }
    }

export default withAuthenticate;