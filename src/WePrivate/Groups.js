import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ElementList from '../Components/WeListComponents/ElementList';
import profile from '../images/panda.jpg';

class Groups extends Component {
  render() {
  
    const {
      rootRoute,
      routeGroup,
      groupList,
      handlefetchgroup
    } = this.props;
    console.log('soy la ruta ',`${rootRoute}${routeGroup}`)
    return (
      <div className="main--welist">
        <ul className="list--welist">
            {groupList.map(function(group,i){
              return (
                <Link to={`${rootRoute}${routeGroup}`} >
                <li className = "groupsli" key={i} onClick= {handlefetchgroup}>
                  <ElementList
                    image={profile}
                    group={group.name}
                    name="María"
                    date="15:13"
                    message="last message from this group"
                  />
                </li>
                </Link>
              )
            })}
          </ul>
      </div>
    );
  }
}

export default Groups;

