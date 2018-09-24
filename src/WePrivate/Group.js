import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ElementList from '../Components/WeListComponents/ElementList';
import WeButtonOption from '../Components/WeButtonOption';
import WeArrow from '../Components/WeArrow';
import WeInputButton from '../Components/WeInputButton';
import WeHeader from '../Components/WeHeader';
import profile from '../images/panda.jpg';

class Group extends Component {
  componentDidMount() {
    const { fetchApiMessages } = this.props;
    this.interval = setInterval(fetchApiMessages, 2000)
    fetchApiMessages();
    this.props.resetId();
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const {
      routePrivate,
      routePublic,
      routeGroup,
      location,
      history,
      rootRoute,
      routeThread,
      handleIdThread,
      handlefetchSendMessage,
      handleInputMessageValue,
      inputMessageValue,
      filterArray,
      handleDeleteLocalStorage,
      handlefetchThread,
      InputMessageGroupValue,
    } = this.props;
    // console.log('this.props Gropu raquel',this.props);
    if (filterArray.length === 0) {
      return (
        <div>
          <WeHeader />
          <div className='wrapper-menu'>
            <WeArrow
              routePublic={routePublic}
              routeGroup={routeGroup}
              location={location}
            />
            <WeButtonOption
              handleDeleteLocalStorage={handleDeleteLocalStorage}
            />
          </div>
          <div className="msg-load"><p className="text-center">Cargando datos, si pasa más de 1 minuto inicia sesion de nuevo</p></div>
        </div>)
    } else {
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
              handleDeleteLocalStorage={handleDeleteLocalStorage}
            />
          </div>
          <div className="wrapper-nameGroup">
            <img className="rounded-circle img-group" src={profile} alt="profile picture" />
            <div className="wrapper-name-number">
              <h2 className="nameGroup">Adalab Work</h2>
              <h3 className="numberGroup">4 personas</h3>
            </div>
          </div>
          <div className="wrapper-welist">
            <ul className="list--welist">
              {filterArray.map(function (group, i) {
                // console.log("IDDDD en group", group.id)
                return (
                  <Link to={`${rootRoute}${routeThread}/${group.id}`}>
                    <li className="groupsli" key={i}>
                      <ElementList
                        id={group.id}
                        image={profile}
                        name={group.username}
                        date={group.date}
                        message={group.description}
                        addAnswer="Ir a hilo"
                      />
                    </li>
                  </Link>
                )
              })}
            </ul>
          </div>
          <div className="wrapper-input-send">
            <WeInputButton
              InputMessageGroupValue={InputMessageGroupValue}
              handlefetchSendMessage={handlefetchSendMessage}
              handleInputMessageValue={handleInputMessageValue}
              inputMessageValue={inputMessageValue}
            />
          </div>
        </div>
      );
    }
  }
}

Group.propTypes = {
  routePrivate: PropTypes.string.isRequired,
  routePublic: PropTypes.string.isRequired,
  routeGroup: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  rootRoute: PropTypes.string.isRequired,
  routeThread: PropTypes.string.isRequired,
  handleIdThread: PropTypes.func.isRequired,
  handlefetchSendMessage: PropTypes.func.isRequired,
  handleInputMessageValue: PropTypes.func.isRequired,
  inputMessageValue: PropTypes.func.isRequired,
  filterArray: PropTypes.array.isRequired,
  handleDeleteLocalStorage: PropTypes.func.isRequired,
  sendMessageGroup: PropTypes.func.isRequired,
  handlefetchThread: PropTypes.func.isRequired,
  InputMessageGroupValue: PropTypes,
}

export default Group;
