import React, { Component } from 'react';
import WeForm from '../Components/LoginComponents/WeForm';

class Landing extends Component {
  render() {
    const {
      openedErrorFeedback,
      toggleErrorFeedback,
    } = this.props;
    return (
      <div>
        <WeForm
          openedErrorFeedback={openedErrorFeedback}
          toggleErrorFeedback={toggleErrorFeedback}
        />
      </div>
    );
  }
}

export default  Landing;