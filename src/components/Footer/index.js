import React, { Component } from 'react';
import './styles.css';

class Footer extends Component {
render() {
  return(
    <div className="Footer">
      <h3>Site and design © 2018 Grailsoft Technical Solutions</h3>
      <a href='https://www.facebook.com' target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-facebook-square"></span></a>
      <a href='https://www.instagram.com' target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-instagram"></span></a>
      <a href='https://www.twitter.com' target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-twitter-square"></span></a>
</div>    );
  }
}

export default Footer;
