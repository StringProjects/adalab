import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    this.callFetchApiGroup();
  }

  paintGroupName() {
    const groupName = localStorage.getItem('groupName');
    this.setState({
      groupName: groupName,
    });
  }

  callFetchApiGroup() {
    const { fetchApiGroup } = this.props
    fetchApiGroup();
  }

  render() {
    const {
      rootRoute,
      routeGroup,
      filterArrayLastPost,
    } = this.props;

    return (
      <div className="main--welist">
        <Link to={`${rootRoute}${routeGroup}`} >
          <div className="group-name">
            <p>{this.state.groupName}</p>
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

Groups.propTypes = {
  fetchApiGroup: PropTypes.func.isRequired,
  rootRoute: PropTypes.string.isRequired,
  routeGroup: PropTypes.string.isRequired,
  handlefetchgroup: PropTypes.func.isRequired,
  filterArrayLastPost: PropTypes.object.isRequired,
  routePublic: PropTypes.string.isRequired,

  groupList: PropTypes,
}

export default Groups;

