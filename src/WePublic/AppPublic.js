import React, { Component } from 'react';
import Login from './Login';


class AppPublic extends Component {
  render() {
    const {
      openedErrorFeedback,
      toggleErrorFeedback,
      onInputEmail,
      onInputPsw,
      onSubmitBtn,
      getToken,
      location,
      redirectToPrivateArea
      } = this.props;
     
    return (
      <Login
        errorClass={this.props.errorClass}
        onInputEmail={onInputEmail}
        onInputPsw={onInputPsw}
        openedErrorFeedback={openedErrorFeedback}
        toggleErrorFeedback={toggleErrorFeedback}
        onSubmitBtn={onSubmitBtn}
        getToken={getToken}
        redirectToPrivateArea={redirectToPrivateArea}
        location={location}
      />
    );
  }
}

export default AppPublic;