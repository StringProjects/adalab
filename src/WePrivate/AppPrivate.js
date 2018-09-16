import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import WeHeader from '../Components/WeHeader';
import WeButtonOption from '../Components/WeButtonOption';
import Groups from './Groups';
import Group from './Group';
import Thread from './Thread';


class AppPrivate extends Component {
  constructor(props){
    super(props)
    this.state = {
    
      responseStatus: false,
      valueInput: '',
      groupsPost: [],
      threadPost: [],
      inputMessageValue: '',
      filterArray: [],
      filterArrayThread: [],
      id: 0,
    }

    this.deleteToken = this.deleteToken.bind(this)
    this.savedToken = this.savedToken.bind(this)
    this.getToken = this.getToken.bind(this)
    
    this.handlesendMessageGroup = this
      .handlesendMessageGroup
      .bind(this);
    this.onInputMessageGroup = this
      .onInputMessageGroup
      .bind(this);
    this.resetInput = this
      .resetInput
      .bind(this);
    this.handlefetchgroup = this
      .handlefetchgroup
      .bind(this);
    this.handleIdThread = this
      .handleIdThread
      .bind(this);
    this.handlefetchThread = this
      .handlefetchThread
      .bind(this);
    this.handlefetchSendMessage = this
      .handlefetchSendMessage
      .bind(this);
    this.handleInputMessageValue = this.handleInputMessageValue.bind(this);
    this.filterIdPost = this.filterIdPost.bind(this)
    this.handleDeleteLocalStorage = this.handleDeleteLocalStorage.bind(this)

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

  
  //starts fetch api for group post
  handlefetchgroup() {
    const tokengroup = this.getToken()
    fetch('http://adalab.string-projects.com/api/v1/posts', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'AUTH-TOKEN': tokengroup
      },
    })

      .then((response) => {
        return response.json()
          .then((data) => {
            console.log("ENTRA EN FETCHGROUP")
            console.log("DATA", data)
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
    fetch('http://adalab.string-projects.com/api/v1/posts/' + id, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'AUTH-TOKEN': localToken
      },
    })

      .then((response) => {
        return response.json()
          .then((data) => {
            this.setState({ threadPost: data })

          });
      });
  }
  //END fetch api for group THREAD
  handlefetchThread(id) {
   let  localToken = this.getToken()
    this.handlefetchThreadCall(id, localToken)
  }
  //start fetch logout

  fecthApiLogOut(token) {

    fetch('http://adalab.string-projects.com/api/v1/sessions', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'AUTH-TOKEN': token
      },
    }).then((response) => {
      if (response.ok) {
        this.deleteToken();
        this.setState({
          redirectToPrivateArea: false,
          user: '',
          psw: '',
        })
      }

    })
      .catch((error) => {
        console.error(error);
      });
  }

  //end fetch logout

  handleDeleteLocalStorage() {
    const tokendelete = this.getToken()
    this.fecthApiLogOut(tokendelete);
    this.deleteToken();
  }



  //starts fetch api to post message

  handleInputMessageValue(e) {
    const {
      value
    } = e.target;
    this.setState({
      inputMessageValue: value
    },
      () => {
        console.log('valor del estado', this.state.inputMessageValue);
      })

  }

  fetchSendMessage(localToken) {
    fetch('http://adalab.string-projects.com/api/v1/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'AUTH-TOKEN': localToken
      },
      body: JSON.stringify({
        "post": { "description": this.state.inputMessageValue }
      })
    }).then((response) => {
      {/*console.log('response de POST',response);*/ }
      if (response.ok === true) {
        this.handlefetchgroup();
        this.setState({
          inputMessageValue: ''
        })
      }
    })
  }

  handlefetchSendMessage(){

    let localToken = this.getToken();
    this.fetchSendMessage(localToken)
  }
  
  //END fetch api for message

  handleIdThread(event, id) {
    this.setState({
      id: id
    })
    this.handlefetchThread(id)
  }


  onInputMessageGroup(e) {
    const {
      value
    } = e.target;
    this.setState({
      valueInput: value
    })
  }
  handlesendMessageGroup(e) {
    e.preventDefault();
    // InputMessageGroupValue = this.state.valueInput
    // console.log("soy el post",InputMessageGroupValue);
    this.resetInput();
  }
  resetInput() {
    this.setState({
      valueInput: ''
    })
  }

  filterIdPost() {
    console.log("ARRAY QUE FILTRA", this.state.groupsPost);
    const arrayFilter = this.state.groupsPost.filter(function (post) {
      console.log("FILTRANDO", post.post_id)
      return post.post_id === null;
    });
    this.setState({ filterArray: arrayFilter });
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
      savedGroupName
    } = this.props;

    const {
      groupsPost,
      filterArray,
      threadPost
    } = this.state;

    

    return (
      <div className="wrapper-group">
        <Switch>
          <Route
            exact
            path={this.props.computedMatch.path}
            render={() =>
              <div>
                <WeHeader />
                <WeButtonOption
                  routePrivate={routePrivate}
                  routePublic={routePublic}
                  routeGroup={routeGroup}
                  location={location}
                  rootRoute={this.props.computedMatch.path}
                  handleDeleteLocalStorage = {this.handleDeleteLocalStorage}
                />
                <Groups
                  handlefetchgroup={this.handlefetchgroup}
                  routePrivate={routePrivate}
                  routePublic={routePublic}
                  routeGroup={routeGroup}
                  rootRoute={this.props.computedMatch.path}
                  groupList={groupList}
                  fecthApi={fecthApi}
                  getGroupName = {getGroupName}
                  savedGroupName = {savedGroupName}
                />
              </div>
            }
          />
          <Route
            exact
            path={`${this.props.computedMatch.path}${routeGroup}`}
            render={props =>
              <div>

                <Group
                  groupsPost={groupsPost}
                  sendMessageGroup={this.sendMessageGroup}
                  onInputMessageGroup={this.onInputMessageGroup}
                  InputMessageGroupValue={this.InputMessageGroupValue}
                  match={props.match}
                  location={props.location}
                  routeGroup={routeGroup}
                  routePrivate={routePrivate}
                  routePublic={routePublic}
                  routeThread={routeThread}
                  rootRoute={this.props.computedMatch.path}
                  handleIdThread={this.handleIdThread}
                  handlefetchSendMessage={this.handlefetchSendMessage}
                  handleInputMessageValue={this.handleInputMessageValue}
                  inputMessageValue={this.inputMessageValue}
                  filterArray={filterArray}
                  handleDeleteLocalStorage = {this.handleDeleteLocalStorage}
                />
              </div>
            }
          />
          <Route
            exact
            path={`${this.props.computedMatch.path}${routeThread}`}
            render={() =>
              <Thread
                routeGroup={routeGroup}
                rootRoute={this.props.computedMatch.path}
                threadPost={threadPost}
              />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default AppPrivate;
