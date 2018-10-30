import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  ButtonDropdown, 
  DropdownItem, 
  DropdownToggle, 
  DropdownMenu 
} from 'reactstrap';

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
    const {
      handleDeleteLocalStorage
    } = this.props;

    return (
      <div className="dropdown-container">
        <ButtonDropdown className="button-group" direction="left" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle className="Button-option" caret color="primary">
          ···
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu dropdown-menu-right">
            <DropdownItem> 
              Crear grupo 
            </DropdownItem>
            <DropdownItem onClick={handleDeleteLocalStorage}> 
              Cerrar sesión
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    );
  }
}

WeButtonOption.propTypes = {
  handleDeleteLocalStorage: PropTypes.func.isRequired,
};

export default WeButtonOption;
