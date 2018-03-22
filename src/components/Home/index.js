import React, { Component } from 'react';
import './styles.css';


class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home page for Brick and Motor</h1>
        <a href="/menu"><h2>link to menu</h2></a>
        <a href="/about"><h2>link to about</h2></a>
        <a href="/contact"><h2>link to contact</h2></a>
      </div>
    );
  }
}

export default Home;
