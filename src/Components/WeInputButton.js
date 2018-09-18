import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  Button
} from 'reactstrap';

class WeInputButton extends Component {
  render() {
    const {
      handlefetchSendMessage,
      handleInputMessageValue,
      inputMessageValue,
      sendMessageGroup,
    }=this.props;
   
    return (
      <Form className='Input__form' onSubmit={sendMessageGroup}>
        <Input
          onChange={handleInputMessageValue}
          type="text"
          className="form-control Input__text"
          id="message"
          placeholder="Type message"
          value= {inputMessageValue}
          name="message" />
        <Button
          type="submit"
          className="btn Input__btn"
          onClick={handlefetchSendMessage}
        >
          <p>Send</p>
        </Button>
      </Form>
    );
  }
}

WeInputButton.propTypes = {
  handlefetchSendMessage: PropTypes.func.isRequired,
  handleInputMessageValue: PropTypes.func.isRequired,
  inputMessageValue: PropTypes.string.isRequired,
  sendMessageGroup: PropTypes.func.isRequired,
}

export default WeInputButton;
