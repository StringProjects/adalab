import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  Row, 
  Col 
} from 'reactstrap';


class ElementList extends Component {
  constructor(props){
    super(props)

    this.handleClickThread = this
    .handleClickThread
    .bind(this);
  }
    
    
  handleClickThread(e){
    
    const { 
      id, 
      handleIdThread 
    } = this.props;
    handleIdThread(id);
    // console.log("aaaaaaa", this.props);
  }

  render() {
    //raquel-->answers no se esta pasando por props, se podria quitar
    const { 
      image,
      name,
      date,
      message,
      answers,
      addAnswer,
    } = this.props;
    // console.log('this.props ElementList raquel',this.props);
    return (
      <Row className="ElementList-wrapper">
          
        <Col xs="4" md="3" lg="2" xl="2" className="ElementList_image-container">
            <img className="rounded-circle ElementList-image" width="50px" height="50px" src={image} alt="profile" />
        </Col>
        
        <Col xs="7" md="8" lg="7" xl="7" className="ElementList_text-container">
        
          <Row>
              <Col className="flex-wrapper person-wrapper">
                <h3 className="person-title">
                  {name}
                  <span className="date-text">{date}</span>
                </h3>
              </Col>
          </Row>
          
          <Row>
            <Col>
              <p className="message-text">{message}</p>
            </Col>
          </Row>
          <Row>
            <Col className="flex-wrapper">
              <span className="answers-number">{answers}</span>
                  <span 
                  className="add-answer"  
                  >
                  {addAnswer}
                  </span>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

ElementList.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  answers: PropTypes.string.isRequired,
  addAnswer: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired, 
  handleIdThread: PropTypes.func.isRequired, 
};

export default ElementList;