import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ElementList from '../Components/WeListComponents/ElementList';
import profile from '../images/panda.jpg';

class Groups extends Component {
  render() {
  
    const {
      rootRoute,
      routeGroup,
      groupList
    } = this.props;
    console.log('soy la ruta ',`${rootRoute}${routeGroup}`)
    return (
      <div className="main--welist">
        <Link to={`${rootRoute}${routeGroup}`}>
        <ul>
            {groupList.map(function(group,i){
              return (
                <li className = "groupsli" key={i}>
                  <ElementList
                    image={profile}
                    group={group.name}
                    name="María"
                    date="15:13"
                    message="last message from this group"
                  />
                </li>
              )
            })}
          </ul>
        </Link>
      </div>
    );
  }
}

export default Groups;

