import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class NotFound extends Component {
  render() {
    return (
      <div className="page-container">
        <h1 className="title">404</h1>
        <h2>404 Page here</h2>
        <center><Link to="/">Return to Home Page</Link></center>
      </div>
    );
  }
}

export default NotFound;
