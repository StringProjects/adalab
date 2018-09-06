import React, { Component } from 'react';

class ListHeader extends Component {
  render() {
    return (
      <div className="ListHeader-wrapper">
        <img src="" alt=""/>
        <h3>
            Nombre grupo
            <span>hora</span>
        </h3>
        <h3>
            Nombre persona
            <span>hora</span>
        </h3>
        <p>mensaje</p>
        <span>nº personas</span>

      </div>
    )
  }
}
export default ListHeader;