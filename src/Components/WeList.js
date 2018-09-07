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