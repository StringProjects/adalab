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
      groupList,
    } = this.props;
    console.log('props en app private', this.props)
    return (
      <div className="wrapper-group">
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
          groupList={groupList}
        />
      </div>
    );
  }
}

export default AppPrivate;