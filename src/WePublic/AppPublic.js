import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Login from './Login';

class AppPublic extends Component {
  render() {
    const {
      onSubmitBtn,
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
        onSubmitBtn={onSubmitBtn}
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
  location: PropTypes.object.isRequired,
  onInputEmail: PropTypes.func.isRequired,
  onInputPsw: PropTypes.func.isRequired,
  onSubmitBtn: PropTypes.func.isRequired,
  redirectToPrivateArea: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
}

export default AppPublic;