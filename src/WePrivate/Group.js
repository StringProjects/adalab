import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ElementList from '../Components/WeListComponents/ElementList';
import WeButtonOption from '../Components/WeButtonOption';
import WeArrow from '../Components/WeArrow';
import WeInputButton from '../Components/WeInputButton';
import WeHeader from '../Components/WeHeader';
import profile from '../images/panda.jpg';

class Group extends Component {
  render() {
    const groupsPost= this.props.groupsPost;

    const {
      routePrivate,
      routePublic,
      routeGroup,
      location,
      rootRoute,
      routeThread,
      handleIdThread,
      handlefetchSendMessage,
      handleInputMessageValue,
      inputMessageValue
    } = this.props;

    // console.log('props en group', this.props)
    return (
      <div className="wrapper-group">
        <WeHeader />
        <div className='wrapper-menu'>
          <WeArrow
            routePublic={routePublic}
            routeGroup={routeGroup}
            location={location}
          />
          <WeButtonOption
            routePrivate={routePrivate}
            routePublic={routePublic}
            routeGroup={routeGroup}
            location={location}
          />
        </div>
        <div className="wrapper-nameGroup">
          <img className="rounded-circle img-group" src={profile} alt="profile picture" />
          <div className="wrapper-name-number">
            <h2 className="nameGroup">Adalab Work</h2>
            <h3 className="numberGroup">10 personas</h3>
          </div>
        </div>
        <div className="wrapper-welist">
        <ul>
            {groupsPost.map(function(group,i){

              return (
                <Link to={`${rootRoute}${routeThread}`}>
                <li className = "groupsli" key={i}>
                  <ElementList
                    image={profile}
                    name={group.username}
                    date={group.date}
                    message={group.description}
                  />
                </li>
                </Link>
              )
            })}
          </ul>

        </div>
        <div className="wrapper-input-send">
          <WeInputButton
            sendMessageGroup={this.props.sendMessageGroup}
            onInputMessageGroup={this.props.onInputMessageGroup}
            InputMessageGroupValue={this.props.InputMessageGroupValue}
            handlefetchSendMessage={handlefetchSendMessage}
            handleInputMessageValue={handleInputMessageValue}
            inputMessageValue={inputMessageValue}
          />
        </div>

      </div>
    );
  }
}

export default Group;
