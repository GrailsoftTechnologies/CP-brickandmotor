import React, { Component } from 'react';
import Router from './components/Router/index.js';
import NavigationBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import Logo from './img/brickAndMotorLogo.png';
import Background1 from './img/image5.jpeg';
import Background2 from './img/image4.jpeg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar background="black" text="white" hovercolor="grey" logo={Logo}/>
        <Router background="black" text="white" hovercolor="grey" backgroundImage={[Background1, Background2]}/>
        <Footer background="black" text="white" hovercolor="grey"/>
      </div>
    );
  }
}

export default App;
