import React, { Component } from 'react';
import ElementList from './WeListComponents/ElementList';
import ListHeader from './WeListComponents/ListHeader';
import profile from '../images/wp-image-58683558-random-picture.jpg';

class WeList extends Component {
  render() {
    return (
      <div className="WeList-wrapper">
        <ul className="list-group">
          <li>
            <ElementList
              image={profile}
              group="Adalat"
              name="María"
              date="15:13"
              message="last message from this group" 
              addAnswer="Add answer"
            />
          </li>
          <li>
            <ElementList 
                image={profile}
                name="Bis"
                date="12:25"
                message="my message" 
                answers="8 answers"
              />
          </li>
            
          
          
        </ul>
      </div>  
    );
  }
}

export default WeList;