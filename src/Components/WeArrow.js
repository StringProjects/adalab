import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        <Button className='btn-primary HeaderThread__btn'>
          <i className="fas fa-arrow-left HeaderThread__arrow"></i>
        </Button>
      </Link>
    );
  }
}

WeArrow.propTypes = {
  routePublic: PropTypes.string.isRequired,
  routeGroup: PropTypes.string.isRequired,
  rootRoute: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};

export default WeArrow;