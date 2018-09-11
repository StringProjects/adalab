import React, { Component } from 'react';
import AppPublic from './WePublic/AppPublic';
import AppPrivate from './WePrivate/AppPrivate';
import Group from './WePrivate/Group';
import Thread from './WePrivate/Thread';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './Components/PrivateComponents/PrivateRoute';

let localToken;

class App extends Component {
  constructor() {
    super()

    this.state = {
      user: '',
      psw: '',
      openedErrorFeedback: false,
      redirectToPrivateArea: false,
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
    this.getToken = this.getToken.bind(this);
  }

  // componentDidMount() {
  //   this.fecthApi();
  // }

  toggleErrorFeedback(event) {
    event.preventDefault();
    const { openedErrorFeedback } = this.state;
    this.setState({
      openedErrorFeedback: !openedErrorFeedback,
    });
  }

  fecthApi() {
    console.log("state", this.state.user)
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
      console.log('what is token', data.user.auth_token);
    });
  }

  savedToken(token) {
    localStorage.setItem('token', token);
  }

  getToken(event) {
    event.preventDefault();
    localToken = localStorage.getItem('token');
    
    if (localToken !== null) {
      console.log('estamos logeados??');
      this.setState ({
        redirectToPrivateArea: true,
      },()=> {console.log('estado', this.state.redirectToPrivateArea)})
    }
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
    e.preventDefault;
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
    const { 
      openedErrorFeedback,
      redirectToPrivateArea
    } = this.state;
    const routePrivate = '/private';
    const routePublic = '/';
    const routeGroup = '/group';
    const routeThread = '/thread';

    console.log('localToken', localToken)
    console.log('estan aqui location y match?',this.props);
    return (
      <div className="container-fluid">
        <Switch>
          <PrivateRoute
            path={routePrivate}
            redirectToPrivateArea={this.state.redirectToPrivateArea}
            component={AppPrivate}
            match={this.props.match}
            location={this.props.location}
            routePrivate={routePrivate}
            routePublic={routePublic}
            routeGroup={routeGroup}
          />
          <Route
            path={routeGroup}
            render={props =>
              <Group
                match={props.match}
                location={props.location}
                routeGroup={routeGroup}
                routePrivate={routePrivate}
                routePublic={routePublic}
              />
            }
          />
          <Route path={routeThread} component={Thread} />
          <Route
            exact path={routePublic}
            render={props =>
              <AppPublic
                openedErrorFeedback={openedErrorFeedback}
                redirectToPrivateArea={redirectToPrivateArea}
                toggleErrorFeedback={this.toggleErrorFeedback}
                match={props.match}
                location={props.location}
                onInputEmail={this.handleInputEmailLoginValue}
                onInputPsw={this.handleInputPswLoginValue}
                onSubmitLogin={this.handleSubmitLogin}
                onSubmitBtn={this.handleSubmitLogin}
                getToken={this.getToken}
              />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
