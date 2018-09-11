import React, { Component } from 'react';
import Login from './Login';

class AppPublic extends Component {


  render() {
    const {
      openedErrorFeedback,
      toggleErrorFeedback,
      onInputEmail,
      onInputPsw,
      onSubmitBtn
      } = this.props;
    return (
     
     
      <Login
        onInputEmail={onInputEmail}
        onInputPsw={onInputPsw}
        openedErrorFeedback={openedErrorFeedback}
        toggleErrorFeedback={toggleErrorFeedback}
        onSubmitBtn={onSubmitBtn}
      />
     

    );
  }
}

export default AppPublic;