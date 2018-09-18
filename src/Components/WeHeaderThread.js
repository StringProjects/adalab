import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class WeHeaderThread extends Component {
  render() {
    const {
      rootRoute,
      routeGroup,
    }=this.props;
    // console.log('this.props WeHeaderThread raquel',this.props);
    return (
      
        <header className='HeaderThread__container'>
          <Link to={`${rootRoute}${routeGroup}`}>
            <Button className='btn HeaderThread__btn'>
              <i className="fas fa-arrow-left HeaderThread__arrow"></i>
            </Button>
          </Link>
          <h2 className='HeaderThread__name'>Hilo</h2>
        </header>
    
    );
  }
}

WeHeaderThread.propTypes = {
  rootRoute: PropTypes.string.isRequired,
  routeGroup: PropTypes.string.isRequired,
}

export default WeHeaderThread;