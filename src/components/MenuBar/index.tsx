import {Navbar, Nav, NavItem, Button} from 'react-bootstrap';
import React, {Component} from 'react';
class MenuBar extends React.Component {
  state = {
    isOpen: false
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div></div>
    );
  }
}

export default MenuBar;
