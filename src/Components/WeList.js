import React, { Component } from 'react';
import ElementList from './WeListComponents/ElementList';

class WeList extends Component {
  render() {
    return (
      <div className="WeList-wrapper">
        <ul className="list-group list-container">
          <li className="list-element">
            <ElementList
              image={this.props.image}
              group={this.props.group}
              name={this.props.name}
              date={this.props.date}
              message={this.props.message}
              answers={this.props.answers}
            />
          </li>
        </ul>
      </div>  
    );
  }
}

export default WeList;