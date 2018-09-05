import React, { Component } from 'react';
import WeHeader from '../Components/WeHeader';
import WeHeaderThread from '../Components/WeHeaderThread';
import WeForm from '../Components/LoginComponents/WeForm';
import WeInputButton from '../Components/WeInputButton';


class Login extends Component {
  render() {
    return (
      <div className="App">
        <WeHeader/>
        <WeForm/>
      </div>
    );
  }
}

export default  Login;