import React, { Component } from 'react';
import { 
  Route, 
  Switch 
} from 'react-router-dom';
import AppPublic from './WePublic/AppPublic';
import AppPrivate from './WePrivate/AppPrivate';
import PrivateRoute from './Components/PrivateComponents/PrivateRoute';

let localToken;

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: '',
      psw: '',
      openedErrorFeedback: false,
      redirectToPrivateArea: false,
      responseStatus: false,
      errorClass: "error-hidden",
      valueInput:'',
      groupList: [],
      groupsPost:[],
      threadPost:[]
    }

    this.handleInputEmailLoginValue = this
      .handleInputEmailLoginValue
      .bind(this);
    this.handleInputPswLoginValue = this
      .handleInputPswLoginValue
      .bind(this);
    this.handleSubmitLogin = this
      .handleSubmitLogin
      .bind(this);
    this.getToken = this.getToken.bind(this);
      this.handlesendMessageGroup= this
      .handlesendMessageGroup
      .bind(this);
      this.onInputMessageGroup= this
      .onInputMessageGroup
      .bind(this);
      this.resetInput= this
      .resetInput
      .bind(this);
      this.handlefetchgroup= this
      .handlefetchgroup
      .bind(this);
      this.handleIdThread= this
      .handleIdThread
      .bind(this);
      this.handlefetchThread= this
      .handlefetchThread
      .bind(this);

      
  }

  fecthApi() {
    fetch('http://adalab.string-projects.com/api/v1/sessions', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        "nickname": this.state.user,
        "password": this.state.psw
      })
    }).then((response) => {
      if (response.ok){
          return response.json()
          .then((data) => {
            this.savedToken(data.user.auth_token)
            this.redirectTo();
            this.setState({errorClass: "error-hidden"});
            this.setState({errorClass: "error-hidden", groupList: data.groups});
          });
        }  else {
          this.setState({errorClass: ""})
        }
        
    })
    
  }

  savedToken(token) {
    localStorage.setItem('token', token);
  }

  getToken(event) {
  return localToken = localStorage.getItem('token');
  }

//starts fetch api for group post
handlefetchgroup(){
  fetch('http://adalab.string-projects.com/api/v1/posts', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'AUTH-TOKEN':localToken
    },
    })
    
  .then((response) => {
        return response.json()
  .then((data) => {    
    this.setState({groupsPost:data})
    });  
  })
}
//end fetch api for group post

//starts fetch api for group THREAD

handlefetchThread(){
  fetch('http://adalab.string-projects.com/api/v1/posts/1', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'AUTH-TOKEN':localToken
    },
    })
    
  .then((response) => {
        return response.json()
  .then((data) => {    
    this.setState({threadPost:data})
    });  
  })
}
//END fetch api for group THREAD
handleIdThread(event){
  console.log("ME HAN CLICKADO",event.currentTarget);
  this.handlefetchThread()
}

  handleInputEmailLoginValue(e) {
    const {
      value
    } = e.target;
    this.setState({
      user: value
    })
  }

  handleInputPswLoginValue(e) {
    const {
      value
    } = e.target;
    this.setState({
      psw: value
    })
  }

  redirectTo(){
    if (this.getToken() !== null) {
      this.setState({
        redirectToPrivateArea: true,
        }, () => {
        })
      }
  }

  handleSubmitLogin(e) {
    e.preventDefault();
    this.fecthApi();
    this.redirectTo();
  }
  onInputMessageGroup(e){
    const {
      value
    } = e.target;
    this.setState({
      valueInput: value
    })
  }
  handlesendMessageGroup(e){
    e.preventDefault();
    // InputMessageGroupValue = this.state.valueInput
    // console.log("soy el post",InputMessageGroupValue);
    this.resetInput();
  }
resetInput(){
  this.setState({
    valueInput: ''
  })
}
  render() {
    const { 
      openedErrorFeedback,
      redirectToPrivateArea,
      valueInput,
      groupList,
      groupsPost,
      threadPost
    } = this.state;
    console.log("soy el hilo",threadPost)
    const routePrivate = '/private';
    const routePublic = '/';
    const routeGroups = '/groups';
    const routeGroup = '/group';
    const routeThread = '/thread';
 
    return (
      <div className="container-fluid">
        <Switch>
          <PrivateRoute
            groupsPost={groupsPost}
            handlefetchgroup={this.handlefetchgroup}
            path={routePrivate}
            redirectToPrivateArea={this.state.redirectToPrivateArea}
            component={AppPrivate}
            location={this.props.location}
            routePrivate={routePrivate}
            routePublic={routePublic}
            routeGroup={routeGroup}
            routeGroups={routeGroups}
            routeThread={routeThread}
            groupList={groupList}
            sendMessageGroup= {this.handlesendMessageGroup}
            onInputMessageGroup={this.onInputMessageGroup}
            InputMessageGroupValue={valueInput}
            threadPost={threadPost}
            handleIdThread={this.handleIdThread}
          />
          <Route
            exact path={routePublic}
            render={props =>
              <AppPublic
                errorClass={this.state.errorClass}
                openedErrorFeedback={openedErrorFeedback}
                redirectToPrivateArea={redirectToPrivateArea}
                toggleErrorFeedback={this.toggleErrorFeedback}
                location={props.location}
                onInputEmail={this.handleInputEmailLoginValue}
                onInputPsw={this.handleInputPswLoginValue}
                onSubmitBtn={this.handleSubmitLogin}
                getToken={this.getToken}
              />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;