import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class WeHeaderThread extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <header className='HeaderThread__container'>
          <Link to='/group'>
            <Button className='btn HeaderThread__btn'>
              <i className="fas fa-arrow-left HeaderThread__arrow"></i>
            </Button>
          </Link>
          <h1 className='HeaderThread__name'>Hilo</h1>
          <h2 className='HeaderThread__logo'>we .</h2>
        </header>
      </div>
    );
  }
}

export default WeHeaderThread;