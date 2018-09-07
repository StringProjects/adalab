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
          user: '',
          psw: '',
        openedErrorFeedback: false,
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
        this.toggleErrorFeedback = this.toggleErrorFeedback.bind(this);
    }

    // componentDidMount() {
    //   this.fecthApi();
    // }

    fecthApi() {
      console.log("state",this.state.user)
      fetch('http://adalab.string-projects.com/api/v1/sessions', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          "nickname": this.state.user,
          "password": this.state.psw
        })
      }).then((response) => response.json({})).then((data) => {
        
        this.savedToken(data.user.auth_token)
        console.log(data.user.auth_token);
      });
    }

    savedToken(token) {
      localStorage.setItem('token', token)
    }


    handleInputEmailLoginValue(e) {

      const {
        value
      } = e.target;
      this.setState({
        user: value
      })
      console.log(value);

    }

    handleInputPswLoginValue(e) {

      const {
        value
      } = e.target;
       this.setState({
         psw: value
       })
      console.log(value);

    }

    handleSubmitLogin(e) {
      console.log("entra submit")
      this.fecthApi();
    }

      toggleErrorFeedback(event) {
        event.preventDefault();
        const {
          openedErrorFeedback
        } = this.state;
        this.setState({
          openedErrorFeedback: !openedErrorFeedback,
        });
      }

  render() {
    const {openedErrorFeedback} = this.state;
    console.log('app openedErrorFeedback',openedErrorFeedback);
    return (
      <div className="container-fluid">
        <Switch>
          <Route path='/private' component={AppPrivate} />
          <Route path='/group' component={Group} />
          <Route path='/Thread' component={Thread} />
          <Route
            path='/'
            render={() =>
            <AppPublic
              openedErrorFeedback={openedErrorFeedback}
              toggleErrorFeedback={this.toggleErrorFeedback}
              onInputEmail={this.handleInputEmailLoginValue}
              onInputPsw={this.handleInputPswLoginValue}
              onSubmitLogin={this.handleSubmitLogin}
              onSubmitBtn={this.handleSubmitLogin}
            />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
