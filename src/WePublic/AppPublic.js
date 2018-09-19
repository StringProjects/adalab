import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      history,
      redirectToPrivateArea,
      errorClass,
      justLog,
      turnOffJustLog
    } = this.props;
    // console.log('this.props AppPublic raquel',this.props) 
    return (
      <Login
        errorClass={errorClass}
        onInputEmail={onInputEmail}
        onInputPsw={onInputPsw}
        openedErrorFeedback={openedErrorFeedback}
        toggleErrorFeedback={toggleErrorFeedback}
        onSubmitBtn={onSubmitBtn}
        getToken={getToken}
        redirectToPrivateArea={redirectToPrivateArea}
        location={location}
        history={history}
        justLog= {justLog}
        turnOffJustLog={turnOffJustLog}
      />
    );
  }
}

AppPublic.propTypes = {
  errorClass: PropTypes.string.isRequired,
  getToken: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  onInputEmail: PropTypes.func.isRequired,
  onInputPsw: PropTypes.func.isRequired,
  onSubmitBtn: PropTypes.func.isRequired,
  redirectToPrivateArea: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  //Estas 2 deberian borrarse
  openedErrorFeedback: PropTypes,
  toggleErrorFeedback: PropTypes,
}

export default AppPublic;