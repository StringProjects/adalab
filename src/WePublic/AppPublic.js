import React, { Component } from 'react';
import Login from './Login';
import AppPrivate from '../WePrivate/AppPrivate';


class AppPublic extends Component {
  constructor() {
    super()

    this.state = {
        dataLogin: {
            user: '',
            psw: ''
        }
    }
    this.handleInputEmailLoginValue = this
        .handleInputEmailLoginValue
        .bind(this);
    this.handleInputPswLoginValue = this
        .handleInputPswLoginValue
        .bind(this);
}

componentDidMount() {
  this.fecthApi();
}

fecthApi() {
  fetch('http://adalab.string-projects.com/api/v1/sessions', {
      method: 'POST',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify({"nickname": 'adalab1', "password": 'C12345678'})
  }).then((response) => response.json({})).then((data) => {
      this.savedToken(data.user.auth_token)
      console.log(data.user.auth_token);
  });
}

savedToken(token){
  localStorage.setItem('token', token)
}


handleInputEmailLoginValue(e) {

  const {value} = e.target;
  console.log(value);

}

handleInputPswLoginValue(e) {

  const {value} = e.target;
  console.log(value);

}

  render() {
    const {
      openedErrorFeedback,
      toggleErrorFeedback,
      } = this.props;
    console.log('AppPublic openedErrorFeedback',openedErrorFeedback);
    return (
     
      <div className="container-fluid">
      <Login
        onInputEmail={this.handleInputEmailLoginValue}
        onInputPsw={this.handleInputPswLoginValue}
        openedErrorFeedback={openedErrorFeedback}
        toggleErrorFeedback={toggleErrorFeedback}
      />
      {/* <AppPrivate/>  <AppPublic/> */}
  </div>

    );
  }
}

export default AppPublic;