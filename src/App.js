import React, { Component } from 'react';
import AppPublic from './Public/AppPublic';
import AppPrivate from './Private/AppPrivate';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Switch>
          <Route exact path='/' component={AppPublic} />
          <Route path='/about' component={AppPrivate} />
        </Switch>
      </div>
    );
  }
}

export default App;
