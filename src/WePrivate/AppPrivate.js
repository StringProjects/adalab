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
      onDeleteLocalStorage,
      prueba
    } = this.props;

    return (
      <div className="wrapper-group">
        <WeHeader />
          <WeButtonOption
            routePrivate={routePrivate}
            routePublic={routePublic}
            routeGroup={routeGroup}
            match={match}
            onDeleteLocalStorage={onDeleteLocalStorage}
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