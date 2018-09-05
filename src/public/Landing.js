import React, { Component } from 'react';
import WeHeader from '../Components/LandingComponents/WeHeader';
import WeHeaderThread from '../Components/WeHeaderThread';
import WeForm from '../Components/LandingComponents/WeForm';


class Landing extends Component {
  render() {
    return (
      <div className="App">
        <WeHeader/>
        {/* <WeHeaderThread/> */}
        <WeForm/>
      </div>
    );
  }
}

export default  Landing;