import React, { Component } from 'react';
import WeList from '../Components/WeList';
import WeButtonOption from '../Components/WeButtonOption';
import WeInputButton from '../Components/WeInputButton';
import WeHeader from '../Components/WeHeader';
import ElementList from '../Components/WeListComponents/ElementList';
import profile from '../images/wp-image-58683558-random-picture.jpg';
import { Link } from 'react-router-dom';

class Groups extends Component {
  render() {
    return (
      <div className="wrapper-group">
        <WeHeader />
        <Link to='/'>
          <WeButtonOption />
        </Link>
        <Link to='/group'>
          <WeList
            image={profile}
            group="Adalab Work"
            name="María"
            date="15:13"
            message="last message from this group"
          />
        </Link>
        <WeList
          image={profile}
          group="Adalab2 Work"
          name="Bis"
          date="2days"
          message="last message from this group"
        />
      </div>


    );
  }
}

export default Groups;

