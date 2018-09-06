import React, { Component } from 'react';
// import Groups from './Groups';
import Group from './Group';
import WeList from '../Components/WeList';



class AppPrivate extends Component {
  render() {
    return (
      <div className="App">
         {/* <WeList/> */}
         <Group/>
      </div>
    );
  }
}

export default AppPrivate;