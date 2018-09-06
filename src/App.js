import React, {Component} from 'react';
import Login from './WePublic/Login';
import AppPublic from './WePublic/AppPublic';
import AppPrivate from './WePrivate/AppPrivate';

class App extends Component {
    constructor() {
        super()

        this.state = {
            dataLogin: {
                user: '',
                psw: ''
            }
        }
        this.handleInputEmailLoginValue = this
            .handleInputEmailLoginValue
            .bind(this);
        this.handleInputPswLoginValue = this
            .handleInputPswLoginValue
            .bind(this);
    }

    componentDidMount() {
        this.fecthApi();
    }

    fecthApi() {
        fetch('http://adalab.string-projects.com/api/v1/sessions', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({"nickname": 'adalab1', "password": 'C12345678'})
        }).then((response) => response.json({})).then((jsonskills) => {
            console.log(jsonskills.user.auth_token);
        });

    }

    handleInputEmailLoginValue(e) {

        const {value} = e.target;
        console.log(value);

    }

    handleInputPswLoginValue(e) {

        const {value} = e.target;
        console.log(value);

    }

    render() {
        return (
            <div className="container-fluid">
                <Login
                    onInputEmail={this.handleInputEmailLoginValue}
                    onInputPsw={this.handleInputPswLoginValue}/>
                <AppPrivate/> {/* <AppPublic/> */}
            </div>
        );
    }
}

export default App;
