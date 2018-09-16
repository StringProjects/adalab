import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ElementList from '../Components/WeListComponents/ElementList';
import profile from '../images/panda.jpg';

class Groups extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupName: this.paintGroupName,
    }
  }

  componentDidMount() {
    this.paintGroupName();
  }

  paintGroupName() {
    const groupName = localStorage.getItem('groupName');
    this.setState({
      groupName: groupName,
    })
    console.log('que narices pasa', groupName)
  }


  render() {

    const {
      rootRoute,
      routeGroup,
      groupList,
      handlefetchgroup,
    } = this.props;
    const { groupName } = this.state;
    console.log('soy la ruta ', `${rootRoute}${routeGroup}`)
    return (
      <div className="main--welist">
        <Link to={`${rootRoute}${routeGroup}`} >
          <div onClick={handlefetchgroup}>
            <p>{groupName}</p>
          </div>
        </Link>
        <ul className="list--welist">

          <li className="groupsli" >
            <ElementList
              image={profile}
              group={groupName}
              name="María"
              date="15:13"
              message="last message from this group"
            />
          </li>
          {/* {groupList.map(function(group,i){
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
            })} */}
        </ul>
      </div >
    );
  }
}

export default Groups;

