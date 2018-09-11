import React, { Component } from 'react';
import WeInputButton from '../Components/WeInputButton';
import ElementList from '../Components/ElementList';
import profile from '../images/wp-image-58683558-random-picture.jpg';
import { Link } from 'react-router-dom';

class Groups extends Component {

  render() {
    const groupList = this.props.groupList
    console.log("groupList", groupList)
    return (
      <div className="main--welist">
      <button onClick={this.props.fetchGroupList}>Hola</button>
        <Link to='/group'>
          <ul>
            {groupList.map(function(group,i){
              return (
                <li key={i} onClick={this.props.goToGroup}>
                  <ElementList
                    image={profile}
                    group={groupList.name}
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

