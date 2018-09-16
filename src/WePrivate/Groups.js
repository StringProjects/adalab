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
    this.fetchApiGroup()
  }

  paintGroupName() {
    const groupName = localStorage.getItem('groupName');
    this.setState({
      groupName: groupName,
    })
  }

 fetchApiGroup(){
   const {fetchApiGroup}= this.props
   fetchApiGroup()
 }
  render() {
    console.log("groupname", this.state.groupName)
    const {
      rootRoute,
      routeGroup,
      filterArrayLastPost,
      handlefetchgroup,
    } = this.props;
    console.log("last array",filterArrayLastPost);
    const { groupName } = this.state;
    console.log('soy la ruta ', `${rootRoute}${routeGroup}`)
    return (
      <div className="main--welist">
        <Link to={`${rootRoute}${routeGroup}`} >
          <div className = "group-name" onClick={handlefetchgroup}>
            <p>{groupName}</p>
          </div>
        </Link>
        <ul className="list--welist">
          <li className="groupsli" >
            <ElementList
              image={profile}
              name={filterArrayLastPost.username}
              date={filterArrayLastPost.date}
              message={filterArrayLastPost.description}
            />
          </li>
          

        </ul>
      </div>
    );
  }
}

export default Groups;

