import React, { Component } from 'react';
import Login from './Login';
import AppPrivate from '../WePrivate/AppPrivate';


class AppPublic extends Component {


  render() {
    const {
      openedErrorFeedback,
      toggleErrorFeedback,
      onInputEmail,
      onInputPsw,
      onSubmitBtn
      } = this.props;
    console.log('AppPublic openedErrorFeedback',openedErrorFeedback);
    return (
     
      <div className="container-fluid">
      <Login
        onInputEmail={onInputEmail}
        onInputPsw={onInputPsw}
        openedErrorFeedback={openedErrorFeedback}
        toggleErrorFeedback={toggleErrorFeedback}
        onSubmitBtn={onSubmitBtn}
      />
      {/* <AppPrivate/>  <AppPublic/> */}
  </div>

    );
  }
}

export default AppPublic;