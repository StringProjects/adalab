import React, { Component } from 'react';
import WeHeaderThread from '../Components/WeHeaderThread';
import ElementList from '../Components/WeListComponents/ElementList';
import WeInputButton from '../Components/WeInputButton';
import profile from '../images/panda.jpg';

class Thread extends Component {

  componentDidMount() {
    const {id, handleIdThread} = this.props;
    handleIdThread(this.props.match.params.id);
  }

  render() {
    const threadPost = this.props.threadPost;
    const {
      rootRoute,
      routeGroup,
    } = this.props;
    return (
      <div className="wrapper-thread">
        <WeHeaderThread
          rootRoute={rootRoute}
          routeGroup={routeGroup}
        />
          <div className="wrapper--list-thread">
          <ul className="list--welist">
          {threadPost.map(function(thread,i){
              return (
              <li className = "groupsli">
                  <ElementList
                      image={profile}
                      id={thread.id}
                      image={profile}
                      name={thread.username}
                      date={thread.date}
                      message={thread.description}
                    />
                </li>
          )})}
          </ul>
            </div>
        <div className= "wrapper-input-send">
        <WeInputButton />
        </div>
      </div>
    );
  }
}

export default Thread;

