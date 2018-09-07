import React, { Component } from 'react';
import Login from './Login';
import AppPrivate from '../WePrivate/AppPrivate';


class AppPublic extends Component {


  render() {
    return (
     
      <div className="container-fluid">
      <Login/>
      <AppPrivate/> {/* <AppPublic/> */}
  </div>

    );
  }
}

export default AppPublic;