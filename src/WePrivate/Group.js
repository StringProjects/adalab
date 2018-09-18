import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ElementList from '../Components/WeListComponents/ElementList';
import WeButtonOption from '../Components/WeButtonOption';
import WeArrow from '../Components/WeArrow';
import WeInputButton from '../Components/WeInputButton';
import WeHeader from '../Components/WeHeader';
import profile from '../images/panda.jpg';


class Group extends Component {

  

  componentDidMount() {
    const {fetchApiMessages} = this.props;
    fetchApiMessages();
    this.props.resetId();
  }
      

  render() {
    console.log("state", this.state)
    console.log("props", this.props)
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
    } = this.props;

    if(filterArray.length === 0){
      return(
      <div>
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
              handleDeleteLocalStorage = {handleDeleteLocalStorage}
            />
          </div>
          <div className = "msg-load"><p className="text-center">Cargando datos, si pasa más de 1 minuto inicia sesion de nuevo</p></div>
      </div>)
      
    }else{

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
              handleDeleteLocalStorage = {handleDeleteLocalStorage}
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
          <ul className="list--welist">
              {filterArray.map(function(group,i){
                return (
                  <Link to={`${rootRoute}${routeThread}/${group.id}`}>
                  <li className = "groupsli" key={i}>
                    <ElementList
                      id = {group.id}
                      image={profile}
                      name={group.username}
                      date={group.date}
                      message={group.description}
                      addAnswer="Comienza hilo"
                      handleIdThread={handleIdThread}
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
}

export default Group;
