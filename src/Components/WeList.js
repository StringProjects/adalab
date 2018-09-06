import React, { Component } from 'react';
import ElementList from './WeListComponents/ElementList';

class WeList extends Component {
  render() {
    return (
      <div className="welist-wrapper">
        <header></header>
        <ul className="list-group">
          <ElementList 
            group="Adalat"
            message="last message from this group" 
            addAnswer="Add answer"
          />
          <ElementList 
            name="Bigotitos"
            date="12:25"
            message="my message" 
            answers="8 answers"
          />
        </ul>
      </div>  
    );
  }
}

export default WeList;