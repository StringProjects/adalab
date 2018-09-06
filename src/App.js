import React, { Component } from 'react';
import AppPublic from './public/AppPublic';
import AppPrivate from './private/AppPrivate';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openedErrorFeedback: true,
    };

    this.toggleErrorFeedback = this.toggleErrorFeedback.bind(this);
  }

  toggleErrorFeedback(event) {
    event.preventDefault();
    const {openedErrorFeedback} = this.state;
    this.setState({ 
      openedErrorFeedback: !openedErrorFeedback,
    });
  }

  render() {
    const {openedErrorFeedback} = this.state;
    return (
      <div className="container">
        <AppPrivate/>
        <AppPublic
          openedErrorFeedback={openedErrorFeedback}
          toggleErrorFeedback={this.toggleErrorFeedback}
        />
      </div>
    );
  }
}

export default App;
