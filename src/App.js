import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import AppPublic from './WePublic/AppPublic';
import AppPrivate from './WePrivate/AppPrivate';
import PrivateRoute from './Components/PrivateComponents/PrivateRoute';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      psw: '',
      errorClass: "error-hidden",
      redirectToPrivateArea: false,
      groupList: [],
      justLog: false
    }
    this.changeStates=this.changeStates.bind(this);
    this.turnOffJustLog=this.turnOffJustLog.bind(this);
    this.handleSubmitLogin = this
      .handleSubmitLogin
      .bind(this);
      this.handleInputEmailLoginValue = this
      .handleInputEmailLoginValue
      .bind(this);
    this.handleInputPswLoginValue = this
      .handleInputPswLoginValue
      .bind(this);
    this.redirectTo = this.redirectTo.bind(this);
    this.fecthApi = this.fecthApi.bind(this);
    this.savedToken = this.savedToken.bind(this);
    this.getToken = this.getToken.bind(this);
    this.savedGroupName = this.savedGroupName.bind(this);
    this.getGroupName = this.getGroupName.bind(this);
    this.logOut = this.logOut.bind(this)
  }

  componentDidMount() {
    this.redirectTo();
  }
  turnOffJustLog(){
    this.setState({
      justLog:false ,
    });
  }
  redirectTo() {
    if (this.getToken() !== null) {
      this.setState({
        redirectToPrivateArea: true
      });
    }
  }
  changeStates() {
    if (this.getToken() !== null) {
      this.setState({
        redirectToPrivateArea: true,
        justLog: true,
      });
    }
  }

  fecthApi() {
    fetch('https://adalab.string-projects.com/api/v1/sessions', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        "nickname": this.state.user,
        "password": this.state.psw
      })
    }).then((response) => {
      if (response.ok) {
        return response.json()
          .then((data) => {
            this.savedToken(data.user.auth_token)
            this.savedGroupName(data.groups[0].name)
            this.changeStates();
            this.setState({ 
              errorClass: "error-hidden", 
              groupList: data.groups 
            });
          });
      } else {
        this.setState({ 
          errorClass: "" 
        });
      }

    })
  }

  handleInputEmailLoginValue(e) {
    const {
      value
    } = e.target;
    this.setState({
      user: value
    });
  }

  handleInputPswLoginValue(e) {
    const {
      value
    } = e.target;
    this.setState({
      psw: value
    });
  }

  handleSubmitLogin(e) {
    e.preventDefault();
    this.fecthApi();
  }

  savedToken(token) {
    localStorage.setItem('token', token);
  }

  savedGroupName(groupName) {
    localStorage.setItem('groupName', groupName);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getGroupName() {
    localStorage.getItem('groupName');
  }

  logOut(){
    this.setState({
      redirectToPrivateArea: false,
      user: "",
      psw:""
    })
  }


  render() {
    const {
      redirectToPrivateArea,
      groupList,
      justLog
    } = this.state;
    const routePrivate = '/private';
    const routePublic = '/';
    const routeGroups = '/groups';
    const routeGroup = '/group';
    const routeThread = '/thread';
console.log("match",this.props.match)
    return (
      <div className="container-fluid">
        <Switch>
          <PrivateRoute
            path={routePrivate}
            redirectToPrivateArea={redirectToPrivateArea}
            component={AppPrivate}
            location={this.props.location}
            history={this.props.history}
            routePrivate={routePrivate}
            routePublic={routePublic}
            routeGroup={routeGroup}
            routeGroups={routeGroups}
            routeThread={routeThread}
            groupList={groupList}
            fecthApi = {this.fecthApi}
            getGroupName = {this.getGroupName}
            savedGroupName = {this.getGroupName}
            logOut = {this.logOut}
          />
          <Route
            exact path={routePublic}
            render={props =>
              <AppPublic
                errorClass={this.state.errorClass}
                redirectToPrivateArea={redirectToPrivateArea}
                location={props.location}
                history={props.history}
                onInputEmail={this.handleInputEmailLoginValue}
                onInputPsw={this.handleInputPswLoginValue}
                onSubmitBtn={this.handleSubmitLogin}
                justLog={justLog}
                turnOffJustLog={this.turnOffJustLog}
              />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
