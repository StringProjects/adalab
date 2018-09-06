import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class ErrorFeedBack extends Component {

  render() {
      const {
        openedErrorFeedback,
        toggleErrorFeedback,
      } = this.props;
    return (
      <div>
        {
          openedErrorFeedback && <Alert color="danger" >
          El nombre de usuario o contraseña que has introducido no coincide con nuestro registro. Registrate para crear una cuenta.
        </Alert>
        }
      </div>
    );
  }
}

export default  ErrorFeedBack;