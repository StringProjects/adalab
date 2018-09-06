import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';
import profile from '../../images/wp-image-58683558-random-picture.jpg';
import { Container, Row, Col } from 'reactstrap';

class ElementList extends Component {
  render() {
    return (
      <Row className="element-wrapper">
        <Col xs="2" md="2" lg="2" xl="2">
            <div className="img">
                <img className="rounded-circle" width="50px" height="50px" src={profile} alt="profile picture"/>
            </div>
        </Col>
        <Col xs="9" md="9" lg="9" xl="9">
          <Row>
              <Col>
                  <h3 className="group-title">Nombre grupo</h3>
              </Col>
          </Row>
          <Row>
              <Col className="flex-wrapper">
                <h4 className="person-title">Nombre persona</h4>  
                <span className="date-text">hora</span>
              </Col>
          </Row>
          <Row>
              <Col>
                  <p className="message-text">Aquí iría el mensaje que escribe cada persona</p>
              </Col>
          </Row>
          <Row>
              <Col className="flex-wrapper">
                  <span className="answers-number">número respuestas</span>
                  <span className="add-answer">Añadir respuesta</span>
              </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default ElementList;