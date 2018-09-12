import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class WeArrow extends Component {
  render() {
    const {
      routePublic,
      routeGroup,
      rootRoute,
      location
    } = this.props;

    return (
      <Link to={location.pathname === `${rootRoute}${routeGroup}` ? rootRoute : routePublic}>
        <Button className='btn HeaderThread__btn'>
          <i className="fas fa-arrow-left HeaderThread__arrow"></i>
        </Button>
      </Link>
    );
  }
}

export default WeArrow;