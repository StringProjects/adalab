import React, { Component } from 'react';
import AppPublic from './WePublic/AppPublic';
import AppPrivate from './WePrivate/AppPrivate';
import { Route, Switch } from 'react-router-dom';
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
      responseStatus: false,
      errorClass: "error-hidden",
      valueInput:'',
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
    this.getToken = this.getToken.bind(this);
      this.handlesendMessageGroup= this
      .handlesendMessageGroup
      .bind(this);
      this.onInputMessageGroup= this
      .onInputMessageGroup
      .bind(this);
      this.resetInput= this
      .resetInput
      .bind(this);
      
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
    }).then((response) => {
      console.log('estoy en la api')
      if (response.ok){
          return response.json()
          .then((data) => {
            this.savedToken(data.user.auth_token)
            this.setState({errorClass: "error-hidden"})
          });
        }  else {
          this.setState({errorClass: ""})
        }
        
    })
    
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
  }

  handleInputPswLoginValue(e) {
    const {
      value
    } = e.target;
    this.setState({
      psw: value
    })
  }

  handleSubmitLogin(e) {
    console.log('onSubmit en App')
    e.preventDefault();
    this.fecthApi();
  }
  onInputMessageGroup(e){
    const {
      value
    } = e.target;
    this.setState({
      valueInput: value
    })
    console.log("soy un value input", this.state.valueInput);
  }
  handlesendMessageGroup(e){
    e.preventDefault();
    // InputMessageGroupValue = this.state.valueInput
    // console.log("soy el post",InputMessageGroupValue);
    this.resetInput();
  }
resetInput(){
  this.setState({
    valueInput: ''
  })
}
  render() {
    const { 
      openedErrorFeedback,
      redirectToPrivateArea,
      valueInput,
    } = this.state;
    const routePrivate = '/private';
    const routePublic = '/';
    const routeGroups = '/groups';
    const routeGroup = '/group';
    const routeThread = '/thread';

    console.log('onSubmit en App',this.handleSubmitLogin);
    return (
      <div className="container-fluid">
        <Switch>
          <PrivateRoute
            path={routePrivate}
            redirectToPrivateArea={this.state.redirectToPrivateArea}
            component={AppPrivate}
            location={this.props.location}
            routePrivate={routePrivate}
            routePublic={routePublic}
            routeGroup={routeGroup}
            routeGroups={routeGroups}
            routeThread={routeThread}

            sendMessageGroup= {this.handlesendMessageGroup}
            onInputMessageGroup={this.onInputMessageGroup}
            InputMessageGroupValue={valueInput}
          />
          <Route
            exact path={routePublic}
            render={props =>
              <AppPublic
                errorClass={this.state.errorClass}
                openedErrorFeedback={openedErrorFeedback}
                redirectToPrivateArea={redirectToPrivateArea}
                toggleErrorFeedback={this.toggleErrorFeedback}
                location={props.location}
                onInputEmail={this.handleInputEmailLoginValue}
                onInputPsw={this.handleInputPswLoginValue}
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