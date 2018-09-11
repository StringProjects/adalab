import React, { Component } from 'react';
import Login from './WePublic/Login';
import AppPublic from './WePublic/AppPublic';
import AppPrivate from './WePrivate/AppPrivate';
import Group from './WePrivate/Group';
import Thread from './WePrivate/Thread';
import { Route, Switch } from 'react-router-dom';
let InputMessageGroupValue= '';
let responseStatus = 0;

class App extends Component {
  constructor() {
    super()

    this.state = {
      user: '',
      psw: '',
      openedErrorFeedback: false,
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

  // componentDidMount() {
  //   this.fecthApi();
  // }


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
      responseStatus= response.status;
      if (response.ok){
          return response.json()
          .then((data) => {
            this.savedToken(data.user.auth_token)
            console.log(data.user.auth_token);
            this.setState({errorClass: "error-hidden"})
          });
        }  else {
          console.log("error", response);
          this.setState({errorClass: ""})
          console.log("soy el estado", this.state.responseStatus);
        }
        
    })
    
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
    e.preventDefault();
    console.log("entra submit")
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
    InputMessageGroupValue = this.state.valueInput
    console.log("soy el post",InputMessageGroupValue);
    this.resetInput();
  }
resetInput(){
  this.setState({
    valueInput: ''
  })
}
  render() {
    const { openedErrorFeedback,valueInput } = this.state;
    const routePrivate = '/private';
    const routePublic = '/';
    const routeGroup = '/group';
    const routeThread = '/thread';
    

    console.log('app openedErrorFeedback', openedErrorFeedback);
    return (
      <div className="container-fluid">
        <Switch>
          <Route
            path={routePrivate}
            render={props =>
              <AppPrivate
                match={props.match}
                routePrivate={routePrivate}
                routePublic={routePublic}
                routeGroup={routeGroup}
              />
            }
          />
          <Route
            path={routeGroup}
            render={props =>
              <Group
                sendMessageGroup= {this.handlesendMessageGroup}
                onInputMessageGroup={this.onInputMessageGroup}
                InputMessageGroupValue={valueInput}
                match={props.match}
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
                errorClass={this.state.errorClass}
                openedErrorFeedback={openedErrorFeedback}
                toggleErrorFeedback={this.toggleErrorFeedback}
                match={props.match}
                onInputEmail={this.handleInputEmailLoginValue}
                onInputPsw={this.handleInputPswLoginValue}
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