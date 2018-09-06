import React, { Component } from 'react';
// import Groups from './Groups';
import Groups from './Groups';
import WeList from '../Components/WeList';



class AppPrivate extends Component {
  render() {
    return (
      <div className="AppPrivate">
         <Groups/>
      </div>
    );
  }
}

export default AppPrivate;