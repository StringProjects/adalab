import React, { Component } from 'react';
import AppPublic from './WePublic/AppPublic';
import AppPrivate from './WePrivate/AppPrivate';

class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <AppPrivate/> */}
        <AppPublic/>
      </div>
    );
  }
}

export default App;
