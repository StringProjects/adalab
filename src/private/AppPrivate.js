import React, { Component } from 'react';
import Groups from './Groups';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../scss/components/_ErrorFeedback.scss';


class AppPrivate extends Component {
  render() {
    return (
      <div className="App">
        <p className="text-danger error-typo">
          El nombre de usuario o contraseña que has introducido no coincide con nuestro registro. Registrate para crear una cuenta.
        </p>
      </div>
    );
  }
}

export default AppPrivate;