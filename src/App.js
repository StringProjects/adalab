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
      openedErrorFeedback: false,
    };

    this.toggleErrorFeedback = this.toggleErrorFeedback.bind(this);
  }

  toggleErrorFeedback(event) {
    event.preventDefault();
    const { openedErrorFeedback } = this.state;
    this.setState({
      openedErrorFeedback: !openedErrorFeedback,
    });
  }

  render() {
    const { openedErrorFeedback } = this.state;
    const routePrivate = '/private';
    const routePublic = '/';
    const routeGroup = '/group';
    const routeThread = '/thread';

    console.log('app openedErrorFeedback', openedErrorFeedback);
    return (
      <div className="container-fluid">
        <Switch>
          <Route
            path={routePrivate}
            render={props =>
              <AppPrivate
                match={props.match}
                routePrivate={routePrivate}
                routePublic={routePublic}
                routeGroup={routeGroup}
              />
            }
          />
          <Route
            path={routeGroup}
            render={props =>
              <Group
                match={props.match}
                routeGroup={routeGroup}
                routePrivate={routePrivate}
                routePublic={routePublic}
              />
            }
          />
          <Route path={routeThread} component={Thread} />
          <Route
            exact path={routePublic}
            render={props =>
              <AppPublic
                openedErrorFeedback={openedErrorFeedback}
                toggleErrorFeedback={this.toggleErrorFeedback}
                match={props.match}
              />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
