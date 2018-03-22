import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './styles.css';
import Logo from '../../img/brickAndMotorLogo.png';

class TopBar extends Component {
  render() {
    return (
      <Navbar inverse fluid className={this.props.className}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"><img src={Logo} alt='the logo'></img></Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem href="/Menu">
              Menu
            </NavItem>
            <NavItem href="/About">
              About
            </NavItem>
            <NavItem href="/Contact">
              Contact
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

TopBar.defaultProps = {
  className: "navigationBar",
}

export default TopBar;
