import React, { Component } from 'react';
import { 
  Row, 
  Col 
} from 'reactstrap';


class ElementList extends Component {
  render() {
    return (
      <Row className="ElementList-wrapper">
          
        <Col xs="4" md="3" lg="2" xl="2" className="ElementList_image-container">
            <img className="rounded-circle ElementList-image" width="50px" height="50px" src={this.props.image} alt="profile picture" />
        </Col>
        
        <Col xs="7" md="8" lg="7" xl="7" className="ElementList_text-container">
          
          <Row>
            <Col>
              <h3 className="group-title">
              {this.props.group}
              </h3>
            </Col>
          </Row>
          
          <Row>
              <Col className="flex-wrapper person-wrapper">
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