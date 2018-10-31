import React, {
  Component
} from 'react';
import {
  Route,
  Switch,
  Redirect 
} from 'react-router-dom';
import AppPublic from './WePublic/AppPublic';
import AppPrivate from './WePrivate/AppPrivate';
import PrivateRoute from './Components/PrivateComponents/PrivateRoute';

import {
  connect
} from 'react-redux';
import {
  fetchSession, userSingUp
} from './actions';

import {
  checkSession
} from './checkSession';

class App extends Component {
  constructor(props) {
    super(props)
    //this.changeStates = this.changeStates.bind(this);
    this.turnOffJustLog = this.turnOffJustLog.bind(this);
    // this.getGroupName = this.getGroupName.bind(this);
    // this.logOut = this.logOut.bind(this)
  }

  componentDidMount() {
    if (checkSession(this.props.token) === 1) {
      console.log('out')
    } else if (checkSession(this.props.token) === 2) {
      
    } else if (checkSession(this.props.token) === 0) {
      console.log('in')
    }
  }

  turnOffJustLog() {
    this.setState({
      justLog: false,
    });
  }

  redirectTo() {
    if (this.getToken() !== null) {
      this.setState({
        redirectToPrivateArea: true
      });
    }
  }

  // changeStates() {
  //   if (this.getToken() !== null) {
  //     this.setState({
  //       redirectToPrivateArea: true,
  //       justLog: true,
  //     });
  //   }
  // }


  

  handleSubmitLogin(e) {
    console.log(this.props)
    e.preventDefault();
    this.props.fetchSession(this.state.user, this.state.psw, this.props.justLog, this.props.errorClass, this.props.redirectToPrivateArea);
  }

  // savedToken(token) {
  //   localStorage.setItem('token', token);
  // }

  // savedGroupName(groupName) {
  //   localStorage.setItem('groupName', groupName);
  // }

  getToken() {
    return localStorage.getItem('token');
  }

  getGroupName() {
    localStorage.getItem('groupName');
  }

  logOut() {
    this.setState({
      redirectToPrivateArea: false,
      user: "",
      psw: ""
    })
  }

  render() {
    console.log('token en app', this.props)
    // const {
    //   redirectToPrivateArea,
    //   groupList,
    //   justLog
    // } = this.props;
    const routePrivate = '/private';
    const routePublic = '/';
    const routeGroups = '/groups';
    const routeGroup = '/group';
    const routeThread = '/thread';
    
    return (
      <div className="container-fluid">
        <Switch>
          <Route
            path={"/private"}
            render={(props) => {
              return (<div>Hola</div>);
            }
          }
          />
          <Route
            exact path={routePublic}
            render={props =>
              <AppPublic
                errorClass={this.props.errorClass}
                redirectToPrivateArea={this.props.redirectToPrivateArea}
                location={props.location}
                history={props.history}
                onSubmitBtn={this.handleSubmitLogin}
                justLog={this.props.justLog}
                turnOffJustLog={this.turnOffJustLog}
              />
            }
          />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.storeSession.token,
    justLog: state.storeSession.justLog,
    errorClass: state.storeSession.errorClass,
    redirectToPrivateArea: state.storeSession.redirectToPrivateArea,
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)