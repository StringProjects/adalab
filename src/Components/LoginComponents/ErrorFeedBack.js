import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "reactstrap";

class ErrorFeedBack extends Component {
  render() {
    const { 
      errorClass,
    } = this.props;
    return (
      <div className={errorClass}>
        <Alert color="danger">
          El nombre de usuario o contraseña que has introducido no coincide con
          ninguna cuenta. Registrate para poder acceder.
        </Alert>
      </div>
    );
  }
}

ErrorFeedBack.propTypes = {
  errorClass: PropTypes.string
};

export default ErrorFeedBack;