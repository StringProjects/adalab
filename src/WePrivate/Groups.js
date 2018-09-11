import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WeList from '../Components/WeList';
import profile from '../images/panda.jpg';

class Groups extends Component {
  render() {
    return (
      <div className="main--welist">
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

