import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import WeHeader from '../Components/WeHeader';
import WeButtonOption from '../Components/WeButtonOption';
import Groups from './Groups';
import Group from './Group';
import Thread from './Thread';


class AppPrivate extends Component {
  render() {
    const {
      routePrivate,
      routePublic,
      routeGroup,
      routeThread,
      routeGroups,
      match,
      location,
      valueInput,
      sendMessageGroup,
      onInputMessageGroup,
      InputMessageGroupValue,
      groupList
    } = this.props;
    console.log('props en app private', this.props)
    return (
      <div className="wrapper-group">
        <Switch>
          <Route
            exact
            path={this.props.computedMatch.path}
            render={ () =>
              <div>
              <WeHeader />
              <WeButtonOption
                routePrivate={routePrivate}
                routePublic={routePublic}
                routeGroup={routeGroup}
                match={match}
                location={location}
                rootRoute={this.props.computedMatch.path}
              />
              <Groups
              groupList={groupList}
              routePrivate={routePrivate}
              routePublic={routePublic}
              routeGroup={routeGroup}
              rootRoute={this.props.computedMatch.path}
              />
              </div>
            }
          />
          <Route
            exact
            path={`${this.props.computedMatch.path}${routeGroup}`}
            render={props =>
              <div>

              <Group
                sendMessageGroup= {sendMessageGroup}
                onInputMessageGroup={onInputMessageGroup}
                InputMessageGroupValue={InputMessageGroupValue}
                match={props.match}
                location={props.location}
                routeGroup={routeGroup}
                routePrivate={routePrivate}
                routePublic={routePublic}
                routeThread={routeThread}
                rootRoute={this.props.computedMatch.path}
              />
              </div>
            }
          />
          <Route
            exact
            path={`${this.props.computedMatch.path}${routeThread}`}
            render={() =>
              <Thread
                routeGroup={routeGroup}
                rootRoute={this.props.computedMatch.path}
              />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default AppPrivate;