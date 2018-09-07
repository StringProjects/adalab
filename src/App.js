import React, { Component } from 'react';
import Login from './WePublic/Login';
import AppPublic from './WePublic/AppPublic';
import AppPrivate from './WePrivate/AppPrivate';
import Group from './WePrivate/Group';
import Thread from './WePrivate/Thread';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openedErrorFeedback: true,
    };

    this.toggleErrorFeedback = this.toggleErrorFeedback.bind(this);
  }

  toggleErrorFeedback(event) {
    event.preventDefault();
    const {openedErrorFeedback} = this.state;
    this.setState({ 
      openedErrorFeedback: !openedErrorFeedback,
    });
  }

  render() {
    const {openedErrorFeedback} = this.state;
    return (
      <div className="container-fluid">
        <Switch>
          <Route exact path='/' component={AppPublic} />
          <Route path='/private' component={AppPrivate} />
          <Route path='/group' component={Group} />
          <Route path='/Thread' component={Thread} />
        </Switch>
        {/*<AppPublic
          openedErrorFeedback={openedErrorFeedback}
          toggleErrorFeedback={this.toggleErrorFeedback}
        />*/}
      </div>
    );
  }
}

export default App;
