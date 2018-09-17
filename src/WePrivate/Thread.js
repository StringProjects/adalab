import React, { Component } from 'react';
import WeHeaderThread from '../Components/WeHeaderThread';
import ElementList from '../Components/WeListComponents/ElementList';
import WeInputButton from '../Components/WeInputButton';
import profile from '../images/panda.jpg';

class Thread extends Component {
  render() {
    console.log("ffffff",this.props)
    const threadPost = this.props.threadPost;
    const {
      rootRoute,
      routeGroup,
      handlefetchSendMessage,
      handleInputMessageValue
    } = this.props;

    console.log('threadPost', threadPost);
    
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
        <WeInputButton 
          handlefetchSendMessage={handlefetchSendMessage}
          handleInputMessageValue={handleInputMessageValue}
        />
        </div>
      </div>
    );
  }
}

export default Thread;

