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
        <Navbar.Collapse id="navBarTest">
          <Nav pullRight>
            <NavItem href="https://www.instagram.com/brickandmotorpdx/" target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-instagram"></span></NavItem>
            <NavItem href="https://www.facebook.com/brickandmotorpdx/" target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-facebook-square"></span></NavItem>
            <NavItem href="/Contact" target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-twitter-square"></span></NavItem>
          </Nav>
          <Nav pullLeft>
            <NavItem href="/Menu" target="_blank" rel="noreferrer noopener">Menu</NavItem>
            <NavItem href="/About" target="_blank" rel="noreferrer noopener">About</NavItem>
            <NavItem href="/Contact" target="_blank" rel="noreferrer noopener">Contact</NavItem>
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
