import React, { Component } from 'react';
import Login from './Login';


class AppPublic extends Component {
  render() {
    const {
      openedErrorFeedback, 
      toggleErrorFeedback,
    } = this.props;
    return (
        <Login
          openedErrorFeedback={openedErrorFeedback}
          toggleErrorFeedback={toggleErrorFeedback}
        />
    );
  }
}

export default AppPublic;