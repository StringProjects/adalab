import React, { Component } from 'react';

import Login from './WePublic/Login';
import AppPublic from './WePublic/AppPublic';
import AppPrivate from './WePrivate/AppPrivate';

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
