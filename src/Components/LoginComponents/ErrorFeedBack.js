import React, { Component } from 'react';
import {Alert} from 'reactstrap';


class ErrorFeedBack extends Component {
  render() {
    return (
      <div className={this.props.errorClass}>
        <Alert color="danger">
          El corrreo electronico o contraseña que has introducido no coincide con ninguna cuenta. Registarte para poder acceder
        </Alert>
      </div>
    );
  }
}

export default  ErrorFeedBack;