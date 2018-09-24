import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeHeaderThread from '../Components/WeHeaderThread';
import ElementList from '../Components/WeListComponents/ElementList';
import WeInputButton from '../Components/WeInputButton';
import profile from '../images/panda.jpg';

class Thread extends Component {

  componentDidMount() {
    const {
      id,
      handleIdThread,
    } = this.props;
    handleIdThread(id);
  }

  render() {
    const threadPost = this.props.threadPost;
    const {
      rootRoute,
      routeGroup,
      handlefetchSendMessage,
      handleInputMessageValue
    } = this.props;

    if (threadPost.length === 0) {

      return (
        <div className="wrapper-thread">
          <WeHeaderThread
            rootRoute={rootRoute}
            routeGroup={routeGroup}
          />
          <div className="msg-load"><p className="text-center">Cargando datos, si pasa más de 1 minuto inicia sesion de nuevo</p></div>
        </div>
      );
    } else {

      return (
        <div className="wrapper-thread">
          <WeHeaderThread
            rootRoute={rootRoute}
            routeGroup={routeGroup}
          />
          <div className="wrapper--list-thread">
            <ul className="list--welist">
              {threadPost.map(function (thread, i) {

                return (
                  <li className="groupsli">
                    <ElementList
                      id={thread.id}
                      image={profile}
                      name={thread.username}
                      date={thread.date}
                      message={thread.description}
                    />
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="wrapper-input-send">
            <WeInputButton
              handlefetchSendMessage={handlefetchSendMessage}
              handleInputMessageValue={handleInputMessageValue}
            />
          </div>
        </div>
      );
    }
  }
}

Thread.propTypes = {
  rootRoute: PropTypes.string.isRequired,
  routeGroup: PropTypes.string.isRequired,
  threadPost: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  handleIdThread: PropTypes.func.isRequired,
}

export default Thread;

