import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './styles.css';
import Logo from '../../img/image2.jpeg';

class TopBar extends Component {
  render() {
    return (
      <Navbar inverse fluid className={this.props.className}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"><img id="bamLogo" src={Logo} alt='the brick and motor logo'></img></Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse id="navBarTest">
          <Nav pullRight>
            <NavItem href="https://www.instagram.com/brickandmotorpdx/" target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-instagram"></span></NavItem>
            <NavItem href="https://www.facebook.com/brickandmotorpdx/" target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-facebook-square"></span></NavItem>
            <NavItem href="https://www.twitter.com" target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-twitter-square"></span></NavItem>
          </Nav>
          <Nav pullLeft>
            <NavItem href="/Menu">Menu</NavItem>
            <NavItem href="/About">About</NavItem>
            <NavItem href="/Contact">Contact</NavItem>
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
