import React, { Component } from 'react';
import WeHeader from '../Components/WeHeader';
import WeButtonOption from '../Components/WeButtonOption';
import Groups from './Groups';


class AppPrivate extends Component {
  render() {
    const {
      routePrivate,
      routePublic,
      routeGroup,
      match,
    } = this.props;
    console.log('props en app private', this.props)
    return (
      <div className="AppPrivate">
        <WeHeader />
          <WeButtonOption
            routePrivate={routePrivate}
            routePublic={routePublic}
            routeGroup={routeGroup}
            match={match}
          />
        <Groups
          routePrivate={routePrivate}
          routePublic={routePublic}
          routeGroup={routeGroup}
        />
      </div>
    );
  }
}

export default AppPrivate;