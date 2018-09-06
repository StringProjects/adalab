import React, { Component } from 'react';
// import Groups from './Groups';
import Group from './Group';
import WeList from '../Components/WeList';
import Thread from './Thread';


class AppPrivate extends Component {
  render() {
    return (
      <div className="AppPrivate">
         <Group/>
         <Thread/>
      </div>
    );
  }
}

export default AppPrivate;