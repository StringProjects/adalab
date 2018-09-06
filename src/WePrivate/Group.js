import React, { Component } from 'react';
import WeList from '../Components/WeList';
import WeInputButton from '../Components/WeInputButton';
import WeHeader from '../Components/WeHeader';
import ElementList from '../Components/WeListComponents/ElementList';

class Group extends Component {
  render() {
    return (
      <div className= "wrapper-group">
     <WeHeader/>
      <WeList/>
      <WeInputButton/>
      </div>
    );
  }
}

export default Group;
