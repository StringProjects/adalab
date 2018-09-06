import React, { Component } from 'react';
import AppPublic from './Public/AppPublic';
import AppPrivate from './Private/AppPrivate';

class App extends Component {
  render() {
    return (
      <div className="container">
        <AppPrivate/>
        {/* <AppPublic/> */}
      </div>
    );
  }
}

export default App;
