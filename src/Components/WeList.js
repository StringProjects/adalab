import React, { Component } from 'react';
import ElementList from './WeListComponents/ElementList';
import ListHeader from './WeListComponents/ListHeader';
import profile from '../images/wp-image-58683558-random-picture.jpg';

class WeList extends Component {
  render() {
    return (
      <div className="welist-wrapper">
        <ListHeader/>
        {/* <ul className="list-group">
          <ElementList
            image={profile}
            group="Adalat"
            date="15:13"
            message="last message from this group" 
            addAnswer="Add answer"
          />
          <ElementList 
            name="Bigotitos"
            date="12:25"
            message="my message" 
            answers="8 answers"
          />
        </ul> */}
      </div>  
    );
  }
}

export default WeList;