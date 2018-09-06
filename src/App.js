import React, { Component } from 'react';

import Login from './WePublic/Login';
import AppPublic from './WePublic/AppPublic';
import AppPrivate from './WePrivate/AppPrivate';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Switch>
          <Route exact path='/' component={AppPublic} />
          <Route path='/private' component={AppPrivate} />
        </Switch>
      </div>
    );
  }
}

export default App;
