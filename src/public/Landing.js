import React, { Component } from 'react';
import WeHeader from './LandingComponents/WeHeader';
import WeForm from './LandingComponents/WeForm';
import ErrorFeedBack from './LandingComponents/ErrorFeedBack';
import WeHeaderThread from '../private/Components/WeHeaderThread';

class Landing extends Component {
  render() {
    return (
      <div className="App">
        {/* <WeHeader/> */}
        <WeHeaderThread/>
      </div>
    );
  }
}

export default  Landing;