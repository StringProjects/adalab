import React, { Component } from 'react';
// import Groups from './Groups';
import Groups from './Groups';
import WeList from '../Components/WeList';
import Thread from './Thread';


class AppPrivate extends Component {
  render() {
    return (
      <div className="AppPrivate">
         <Groups/>
         <Thread/>
      </div>
    );
  }
}

export default AppPrivate;