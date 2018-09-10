import React, { Component } from 'react';
import Login from './Login';
import AppPrivate from '../WePrivate/AppPrivate';


class AppPublic extends Component {


  render() {

    console.log('props', this.props)

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