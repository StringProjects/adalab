import React, { Component } from 'react';
import {ButtonDropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';

class WeButtonOption extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="pepe">
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret color="primary">
          ···
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem> Crear grupo </DropdownItem>
            <DropdownItem> Cerrar sesión</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    );
  }
}

export default WeButtonOption;
