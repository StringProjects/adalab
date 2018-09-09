import React, { Component } from 'react';
import WeHeaderThread from '../Components/WeHeaderThread';
import WeList from '../Components/WeList';
import profile from '../images/wp-image-58683558-random-picture.jpg';
import WeInputButton from '../Components/WeInputButton';

class Thread extends Component {
  render() {
    return (
      <div className="App">
        <WeHeaderThread />
        <WeList
          image={profile}
          name="María"
          date="1 day"
          message="last message from this group"
          answers="8 answers"
        />
        <WeList
          image={profile}
          name="Bis"
          date="15:13"
          message="last message from this group"
        />
        <WeList
          image={profile}
          name="Raquel"
          date="17h"
          message="last message from this group"
        />
        <WeInputButton />
      </div>
    );
  }
}

export default Thread;

