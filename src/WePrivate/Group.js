import React, { Component } from 'react';
import WeList from '../Components/WeList';
import WeButtonOption from '../Components/WeButtonOption';
import WeInputButton from '../Components/WeInputButton';
import WeHeader from '../Components/WeHeader';
import ElementList from '../Components/WeListComponents/ElementList';
import profile from '../images/wp-image-58683558-random-picture.jpg';

class Group extends Component {
  render() {
    return (
      <div className= "wrapper-group">
      <WeHeader/>
      <WeButtonOption/>
      <div className= "wrapper-nameGroup">
        <img className="rounded-circle imgGroup" width="50px" height="50px" src={profile} alt="profile picture"/>
        <div className= "wrapper-name-number">
        <h2 className="nameGroup">Adalab</h2>
        <h3 className="numberGroup">10 personas</h3>
        </div>
        </div>
      
      <WeList/>
      <WeInputButton/>
      </div>
    );
  }
}

export default Group;
