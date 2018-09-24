import React, { Component } from 'react';
import ElementList from './WeListComponents/ElementList';

class WeList extends Component {
  render() {
    const { 
      image,
      group,
      name,
      date,
      message,
      answers,
    } = this.props;
    // console.log('this.props WeList raquel',this.props);
    return (
      <div className="WeList-wrapper">
        <ul className="list-group list-container">
          <li className="list-element">
            <ElementList
              image={image}
              group={group}
              name={name}
              date={date}
              message={message}
              answers={answers}
            />
          </li>
        </ul>
      </div>  
    );
  }
}

export default WeList;