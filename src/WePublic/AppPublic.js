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
      console.log('onSubmitBtn AppPublic',onSubmitBtn)
    return (
      <Login
        errorClass={this.props.errorClass}
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