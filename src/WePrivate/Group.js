import React, { Component } from 'react';
import WeButtonOption from '../Components/WeButtonOption';
import WeInputButton from '../Components/WeInputButton';
import WeHeader from '../Components/WeHeader';
import ElementList from '../Components/ElementList';
import profile from '../images/wp-image-58683558-random-picture.jpg';
import { Link } from 'react-router-dom';

class Group extends Component {
  
  render() {
    const {
      routePrivate,
      routePublic,
      routeGroup,
      match,
    } = this.props;

    console.log('props en group', this.props)
    return (
      <div className="wrapper-group">
        <WeHeader />
          <WeButtonOption
              routePrivate={routePrivate}
              routePublic={routePublic}
              routeGroup={routeGroup}
              match={match}
          />
        <div className="wrapper-nameGroup">
          <img className="rounded-circle img-group" src={profile} alt="profile picture" />
          <div className="wrapper-name-number">
            <h2 className="nameGroup">Adalab Work</h2>
            <h3 className="numberGroup">10 personas</h3>
          </div>
        </div>
        <div className="wrapper-welist">
        <Link to='/thread'>
          <ElementList
            image={profile}
            name="María"
            date="15:13"
            message="last message from this group"
            answers="8 answers"
          />
        </Link>
        <ElementList
          image={profile}
          name="Bis"
          date="17:00"
          message="last message from this group"
        />
        </div>
        <div className= "wrapper-input-send">
          <WeInputButton/>
        </div>
        
      </div>
    );
  }
}

export default Group;
