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
  constructor(props) {
    super(props)
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
      threadPost:[],
      inputMessageValue:'',
      filterArray:[]
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
      this.handlefetchSendMessage=this
      .handlefetchSendMessage
      .bind(this);
      this.handleInputMessageValue=this.handleInputMessageValue.bind(this);
      this.filterIdPost = this.filterIdPost.bind(this)

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
    this.setState({groupsPost:data}, this.filterIdPost)
    })
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


//starts fetch api to post message

handleInputMessageValue(e) {
  const {
    value
  } = e.target;
  this.setState({
    inputMessageValue: value
  },
  ()=> {
    console.log('valor del estado', this.state.inputMessageValue);
  })

}

handlefetchSendMessage(localToken){
  fetch('http://adalab.string-projects.com/api/v1/posts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'AUTH-TOKEN':localToken
    },
    body: JSON.stringify({
      "post": {"description":this.state.inputMessageValue}
    })
  }).then((response) => { {/*console.log('response de POST',response);*/}
      if(response.ok===true){
        this.handlefetchgroup();
        this.setState({
          inputMessageValue: ''
        })
        // console.log('respuesta ok');
      }

  })
}
//END fetch api for message

//Start fetch APi for thread
handlefetchSendThread(){
  fetch('http://adalab.string-projects.com/api/v1/posts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'AUTH-TOKEN':localToken
    },
    body: JSON.stringify({
      "post": {"description":this.state.inputMessageValue}
    })
  }).then((response) => { {/*console.log('response de POST',response);*/}
      if(response.ok===true){
        this.handlefetchgroup();
        this.setState({
          inputMessageValue: ''
        })
        // console.log('respuesta ok');
      }

  })
}

handleIdThread(event, id){
  console.log("ME HAN CLICKADO",event.target);
  console.log("ME HAN CLICKADO id",id);
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

filterIdPost(){
  console.log("ARRAY QUE FILTRA",this.state.groupsPost);
const arrayFilter = this.state.groupsPost.filter(function(post){
  console.log("FILTRANDO",post.post_id)
  return post.post_id === null;
});
this.setState( {filterArray : arrayFilter});
}



  render() {
    const {
      openedErrorFeedback,
      redirectToPrivateArea,
      valueInput,
      groupList,
      groupsPost,
      threadPost,
      filterArray
    } = this.state;

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
            handlefetchSendMessage={this.handlefetchSendMessage}
            handleInputMessageValue={this.handleInputMessageValue}
            inputMessageValue={this.state.inputMessageValue}
            filterArray={filterArray}
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
