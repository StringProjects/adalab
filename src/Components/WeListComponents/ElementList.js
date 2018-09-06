import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';
import profile from '../../images/wp-image-58683558-random-picture.jpg';
import { Container, Row, Col } from 'reactstrap';

class ElementList extends Component {
  render() {
    return (
      <Row className="ElementList-wrapper">
          <Col xs="2" md="2" lg="2" xl="2">
            {this.props.image ?
              <div className="img">
                  <img className="rounded-circle" width="50px" height="50px" src={this.props.image} alt="profile picture"/>
              </div>
             : "" }
          </Col>
        <Col xs="9" md="9" lg="9" xl="9">
        {this.props.group ? 
            <Row>
              <Col>
                <h3 className="group-title">
                {this.props.group}
                {this.props.date ? <span className="date-text">{this.props.date}</span> : "" }
                </h3>
              </Col>
            </Row>
          : "" }
        {this.props.name ? 
          <Row>
              <Col className="flex-wrapper">
                <h3 className="person-title">
                    {this.props.name}
                    {this.props.date ? <span className="date-text">{this.props.date}</span> : "" }
                </h3>
              </Col>
          </Row>
        : ""}
          <Row>
              <Col>
                {this.props.message ? <p className="message-text">{this.props.message}</p> : "" }
              </Col>
          </Row>
          <Row>
              <Col className="flex-wrapper">
                {this.props.answers ? <span className="answers-number">{this.props.answers}</span> : "" }
                {this.props.addAnswer ? <span className="add-answer">{this.props.addAnswer}</span> : "" }
              </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default ElementList;