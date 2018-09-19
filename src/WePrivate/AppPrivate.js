import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
} from 'react-router-dom';
import WeHeader from '../Components/WeHeader';
import WeButtonOption from '../Components/WeButtonOption';
import Groups from './Groups';
import Group from './Group';
import Thread from './Thread';


class AppPrivate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      responseStatus: false,
      groupsPost: [],
      threadPost: [],
      inputMessageValue: '',
      filterArray: [],
      filterArrayThread: [],
      id: null,
      filterArrayLastPost: [],
    }

    this.deleteToken = this.deleteToken.bind(this)
    this.savedToken = this.savedToken.bind(this)
    this.getToken = this.getToken.bind(this)
    this.resetInput = this.resetInput.bind(this);
    this.handlefetchgroup = this.handlefetchgroup.bind(this);
    this.handleIdThread = this.handleIdThread.bind(this);
    this.handlefetchThread = this.handlefetchThread.bind(this);
    this.handlefetchSendMessage = this.handlefetchSendMessage.bind(this);
    this.filterIdPost = this.filterIdPost.bind(this);
    this.handleDeleteLocalStorage = this.handleDeleteLocalStorage.bind(this);
    this.filterLastPost = this.filterLastPost.bind(this);
    this.deleteGroupName = this.deleteGroupName.bind(this);
    this.resetId = this.resetId.bind(this);
    this.handlefetchThreadCall = this.handlefetchThreadCall.bind(this);
  }

  savedToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  deleteGroupName() {
    localStorage.removeItem('groupName');
  }

  //starts fetch api for group post
  handlefetchgroup() {
    console.log("Interval")
    const tokengroup = this.getToken();
    fetch('https://adalab.string-projects.com/api/v1/posts', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'AUTH-TOKEN': tokengroup
      },
    })
      .then((response) => {
        return response.json()
          .then((data) => {
            this.setState({ groupsPost: data }, this.filterIdPost)
          })
          .catch((error) => {
            console.error(error);
          });
      })
      
  }
  //end fetch api for group post

  //starts fetch api for group THREAD
  handlefetchThreadCall(id, localToken) {
    console.log("fetch thread ID", id)
    fetch('https://adalab.string-projects.com/api/v1/posts/'+id, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'AUTH-TOKEN': localToken
      },
    })
      .then((response) => {
        return response.json()
          .then((data) => {
            this.setState({
              threadPost: data
            });
          });
      });
  }
  //END fetch api for group THREAD
  handlefetchThread(id) {
    let localToken = this.getToken()
    this.handlefetchThreadCall(id, localToken)
  }


  //start fetch logout
  fecthApiLogOut(token) {

    this.props.logOut()

    fetch('https://adalab.string-projects.com/api/v1/sessions', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'AUTH-TOKEN': token
      },
    }).then((response) => {
      if (response.ok) {
        this.deleteToken();
        this.deleteGroupName();
        this.setState({
          redirectToLogin: true
        });
      }

    })
      .catch((error) => {
        // console.error(error);
      });
  }

  handleDeleteLocalStorage() {
    const tokendelete = this.getToken()
    this.fecthApiLogOut(tokendelete);
    this.deleteToken();
    this.deleteGroupName();
  }



  //starts fetch api to post message
  // handleInputMessageValue = (inputValue) =>{
  //  console.log(" entra en el input de private ", inputValue)
  //   this.setState({
  //     inputMessageValue: inputValue
  //   });

  //   console.log(" nuevo estado ", this.state.inputMessageValue)
  // }



  //   handleInputMessageValue(e) {
  //   const {
  //     value
  //   } = e.target;
  //   this.setState({
  //     inputMessageValue: value
  //   },
  //     () => {
  //       // console.log('valor del estado', this.state.inputMessageValue);
  //     });
  // }

  fetchSendMessage(localToken, texto) {
    console.log("Lo que hay en el estado del input", texto)
    console.log("id en el thread", this.state.id)
    fetch('https://adalab.string-projects.com/api/v1/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'AUTH-TOKEN': localToken
      },
      body: JSON.stringify({
        "post": {
          "description": texto,
          "post_id": this.state.id !== null ? this.state.id : ''
        }
      })

    }).then((response) => {
      if (response.ok === true) {
        if (this.state.id !== null) {
          this.handlefetchThread(this.state.id);
        } else {
          this.handlefetchgroup();
        }
        this.setState({
          inputMessageValue: ''
        });
      }
    })
  }

  resetId = () => {
    console.log("Reset de la id")
    this.setState({
      id: null
    })
  }

  handlefetchSendMessage(e, texto) {
    console.log("Entra en el submit de enviar mensaje")
    console.log("El estado del input ", texto)
    e.preventDefault();
    let localToken = this.getToken();
    this.fetchSendMessage(localToken, texto)

  }
  //END fetch api for message

  handleIdThread(id) {
    this.setState({
      id: id
    });
    this.handlefetchThread(id)
  }

  resetInput = () => {
    console.log("Entra en el reset de limpiar")
    this.setState({
      inputMessageValue: ""
    })
  }

  filterIdPost() {
    if (this.state.groupsPost.length > 0) {
      const arrayFilter = this.state.groupsPost.filter(function (post) {
        return post.post_id === null;
      });
      this.setState({ filterArray: arrayFilter }, this.filterLastPost);
    } else {
      // console.log("vACIO")
    }
  }

  filterLastPost() {
    const arrayFilterLastPost = this.state.filterArray[0];
    this.setState({
      filterArrayLastPost: arrayFilterLastPost
    });
  }

  render() {
    const {
      routePrivate,
      routePublic,
      routeGroup,
      routeThread,
      location,
      groupList,
      fecthApi,
      getGroupName,
      computedMatch,
    } = this.props;

    const {
      groupsPost,
      filterArray,
      threadPost,
      filterArrayLastPost,
      id,

    } = this.state;

    console.log("ID private", id)
    return (
      <div className="wrapper-group">
        <Switch>
          <Route
            exact
            path={computedMatch.path}
            render={() =>
              <div>
                <WeHeader />
                <WeButtonOption
                  routePrivate={routePrivate}
                  routePublic={routePublic}
                  routeGroup={routeGroup}
                  location={location}
                  rootRoute={computedMatch.path}
                  handleDeleteLocalStorage={this.handleDeleteLocalStorage}
                />
                <Groups
                  fetchApiGroup={this.handlefetchgroup}
                  handlefetchgroup={this.handlefetchgroup}
                  routePrivate={routePrivate}
                  routePublic={routePublic}
                  routeGroup={routeGroup}
                  rootRoute={computedMatch.path}
                  filterArrayLastPost={filterArrayLastPost}
                  fecthApi={fecthApi}
                  getGroupName={getGroupName}
                //savedGroupName = {savedGroupName}

                />
              </div>
            }
          />
          <Route
            exact
            path={`${computedMatch.path}${routeGroup}`}
            render={props =>
              <div>
                <Group
                  groupsPost={groupsPost}
                  sendMessageGroup={this.sendMessageGroup}
                  InputMessageGroupValue={this.InputMessageGroupValue}
                  fetchApiMessages={this.handlefetchgroup}
                  match={props.match}
                  location={props.location}
                  history={props.history}
                  routeGroup={routeGroup}
                  routePrivate={routePrivate}
                  routePublic={routePublic}
                  routeThread={routeThread}
                  rootRoute={computedMatch.path}
                  handleIdThread={this.handleIdThread}
                  handlefetchSendMessage={this.handlefetchSendMessage}
                  handleInputMessageValue={this.handleInputMessageValue}
                  inputMessageValue={this.inputMessageValue}
                  filterArray={filterArray}
                  handleDeleteLocalStorage={this.handleDeleteLocalStorage}
                  resetId={this.resetId}
                />
              </div>
            }
          />
          <Route
            exact
            path={`${computedMatch.path}${routeThread}/:id`}
            render={(props) =>
              <Thread
                threadPost={threadPost}
                routeGroup={routeGroup}
                threadPost={threadPost}
                handlefetchSendMessage={this.handlefetchSendMessage}
                handleInputMessageValue={this.handleInputMessageValue}
                rootRoute={computedMatch.path}
                handleIdThread={this.handleIdThread}
                filterArray={filterArray}
                id={props.match.params.id}
              />

            }
          />
        </Switch>
      </div>
    );
  }
}

AppPrivate.propTypes = {
  routePrivate: PropTypes.string.isRequired,
  routePublic: PropTypes.string.isRequired,
  routeGroup: PropTypes.string.isRequired,
  routeThread: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  groupList: PropTypes.array.isRequired,
  fecthApi: PropTypes.func.isRequired,
  computedMatch: PropTypes.object.isRequired,
  getGroupName: PropTypes.func.isRequired,
}

export default AppPrivate;
