import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  Button
} from 'reactstrap';

class WeInputButton extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: ""
    }
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmitSend = this.handleSubmitSend.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }


  handleChangeInput = (e) =>{
   this.setState({
     inputValue: e.target.value
   })
   
    
  }

  handleSubmitSend(e){
    e.preventDefault();
    let inputText = this.state.inputValue;
    // this.props.handleInputMessageValue(inputText);
    this.props.handlefetchSendMessage(e, inputText);
    this.clearInput()
  }

  clearInput = () =>{
      this.setState({
        inputValue: ""
      });
  }

  render() {
    const {
    
      handleInputMessageValue,
      handlefetchSendMessage,
      inputMessageValue,
      sendMessageGroup,
    }=this.props;
   
    return (
      <Form className='Input__form' onSubmit={this.handleSubmitSend}>
        <Input
          onChange={this.handleChangeInput}
          type="text"
          className="form-control Input__text"
          id="message"
          placeholder="Escribe tu mensaje"
          name="message" 
          value={this.state.inputValue}
          />
          <Button
            type="submit"
            className="btn Input__btn"
            // onClick={handlefetchSendMessage}
          >
          <p>Enviar</p>
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
