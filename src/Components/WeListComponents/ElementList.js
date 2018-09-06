import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';


class ElementList extends Component {
  render() {
    return (
      <Row className="ElementList-wrapper">
          
        <Col xs="2" md="2" lg="1" xl="1" className="image-column">
            <img className="rounded-circle" width="50px" height="50px" src={this.props.image} alt="profile picture"/>
        </Col>
        
        <Col xs="9" md="9" lg="11" xl="11">
          
          <Row>
            <Col>
              <h3 className="group-title">
              {this.props.group}
              </h3>
            </Col>
          </Row>
          
          <Row>
              <Col className="flex-wrapper">
                <h3 className="person-title">
                  {this.props.name}
                  <span className="date-text">{this.props.date}</span>
                </h3>
              </Col>
          </Row>
          
          <Row>
            <Col>
              <p className="message-text">{this.props.message}</p>
            </Col>
          </Row>
          <Row>
            <Col className="flex-wrapper">
              <span className="answers-number">{this.props.answers}</span>
              <span className="add-answer">{this.props.addAnswer}</span>
            </Col>
          </Row>
        
        </Col>
      
      </Row>
      
    );
  }
}

export default ElementList;