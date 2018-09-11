import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class WeHeaderThread extends Component {
  render() {
    return (
      
        <header className='HeaderThread__container'>
          <Link to='/group'>
            <Button className='btn HeaderThread__btn'>
              <i className="fas fa-arrow-left HeaderThread__arrow"></i>
            </Button>
          </Link>
          <h2 className='HeaderThread__name'>Hilo</h2>
        </header>
    
    );
  }
}

export default WeHeaderThread;