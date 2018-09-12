import React, { Component } from 'react';
import WeHeaderThread from '../Components/WeHeaderThread';
import ElementList from '../Components/WeListComponents/ElementList';
import WeInputButton from '../Components/WeInputButton';
import profile from '../images/panda.jpg';

class Thread extends Component {
  render() {
    const threadPost = this.props.threadPost;
    console.log("hillloooo",threadPost)
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
           <ul>
            {threadPost.map(function(thread,i){
              return (
             
                <li className = "groupsli" key={i}>
                   <ElementList
                      image={profile}
                      name={thread.username}
                      date={thread.date}
                      message={thread.description}
                    />
                </li>
               
              )
            })}
          </ul>
    
 
        <div className= "wrapper-input-send">
        <WeInputButton />
        </div>
      </div>
    );
  }
}

export default Thread;

