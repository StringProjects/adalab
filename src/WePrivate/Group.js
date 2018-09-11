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

    const groupPostArray = this.props.groupPostArray

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
        <ul>
            {groupPostArray.map(function(post,i){
              return (
                <Link to='/thread'>
                <li key={i} onClick={this.props.goToGroup}>
                  <ElementList
                    image={profile}
                    name={groupPostArray.username}
                    date={groupPostArray.date}
                    message={groupPostArray.description}
                  />
                </li>
              </Link>
              )
            })}
          </ul>
        
        </div>
        <div className= "wrapper-input-send">
          <WeInputButton/>
        </div>
        
      </div>
    );
  }
}

export default Group;
