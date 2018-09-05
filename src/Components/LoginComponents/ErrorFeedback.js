import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class ErrorFeedBack extends Component {
  render() {
    return (
      <Alert color="danger" className="pepe">
        El nombre de usuario o contraseña que has introducido no coincide con nuestro registro. Registrate para crear una cuenta.
      </Alert>
    );
  }
}

export default  ErrorFeedBack;