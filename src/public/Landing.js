import React, { Component } from 'react';
import WeHeader from '../Components/WeHeader';
import WeHeaderThread from '../Components/WeHeaderThread';
import WeForm from '../Components/LandingComponents/WeForm';


class Landing extends Component {
  render() {
    return (
      <div className="wrapper">
          <header className="header--landing">
          <WeHeader/>
          </header>
          <main className="main--landing">
            <h1 className="title--landing text-center">¡Hola de nuevo!</h1>
            <p className="subtitle--landing text-center">Escribe tu email y contraseña para entrar en We.</p>
          <WeForm/>
          </main>
        {/* <WeHeaderThread/> */}
        
      </div>
    );
  }
}

export default  Landing;