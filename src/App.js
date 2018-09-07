import React, { Component } from 'react';
import Login from './WePublic/Login';
import AppPublic from './WePublic/AppPublic';
import AppPrivate from './WePrivate/AppPrivate';
import Group from './WePrivate/Group';
import Thread from './WePrivate/Thread';
import { Route, Switch } from 'react-router-dom';

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
      this.handleSubmitLogin = this
        .handleSubmitLogin
        .bind(this);
    }

    // componentDidMount() {
    //   this.fecthApi();
    // }

    fecthApi() {
      console.log(this.state.dataLogin.user)
      fetch('http://adalab.string-projects.com/api/v1/sessions', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          "nickname": this.state.dataLogin.user,
          "password": this.state.dataLogin.psw
        })
      }).then((response) => response.json({})).then((data) => {

        this.savedToken(data.user.auth_token)
        //console.log(data.user.auth_token);
      });
    }

    savedToken(token) {
      localStorage.setItem('token', token)
    }


    handleInputEmailLoginValue(e) {

      const {
        value
      } = e.target;
      console.log(value);

    }

    handleInputPswLoginValue(e) {

      const {
        value
      } = e.target;
      console.log(value);

    }

    handleSubmitLogin(e) {
      console.log("entra submit")
    }
  render() {
    return (
      <div className="container-fluid">
        <Switch>
          <Route exact path='/' component={AppPublic } />
          <Route path='/private' component={AppPrivate} />
          <Route path='/group' component={Group} />
          <Route path='/Thread' component={Thread} />
        </Switch>
      </div>
    );
  }
}

export default App;
