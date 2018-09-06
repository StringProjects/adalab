import React, { Component } from 'react';
import AppPublic from './public/AppPublic';
import AppPrivate from './private/AppPrivate';
import Login from './public/Login';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        {/* <AppPrivate/> */}
        <Login/>
        {/* <AppPublic/> */}
      </div>
    );
  }
}

export default App;
