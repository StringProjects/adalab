import React, { Component } from 'react';
import Login from './Login';
import AppPrivate from '../WePrivate/AppPrivate';


class AppPublic extends Component {


  render() {
    return (
     
      <div className="container-fluid">
      <Login
          onInputEmail={this.handleInputEmailLoginValue}
          onInputPsw={this.handleInputPswLoginValue}
          onSubmitLogin={this.handleSubmitLogin}/>
      <AppPrivate/> {/* <AppPublic/> */}
  </div>

    );
  }
}

export default AppPublic;