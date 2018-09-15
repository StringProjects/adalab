import React, { Component } from 'react';
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
      sendMessageGroup
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
          name="message" 
          />
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

export default WeInputButton;
