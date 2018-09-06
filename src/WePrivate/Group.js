import React, { Component } from 'react';
import WeList from '../Components/WeList';
import WeButtonOption from '../Components/WeButtonOption';
import WeInputButton from '../Components/WeInputButton';
import WeHeader from '../Components/WeHeader';
import ElementList from '../Components/WeListComponents/ElementList';
import profile from '../images/wp-image-58683558-random-picture.jpg';
import { Link } from 'react-router-dom';

class Group extends Component {
  render() {
    return (
      <div className="wrapper-group">
        <WeHeader />
        <Link to='/private'>
          <WeButtonOption />
        </Link>
        <WeList
          image={profile}
          group="Adalat"
          name="María"
          date="15:13"
          message="last message from this group"
          answers="8 answers"
        />
        <WeInputButton />
      </div>
    );
  }
}

export default Group;
