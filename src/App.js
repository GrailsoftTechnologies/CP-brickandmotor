import React, { Component } from 'react';
import Router from './components/Router/index.js';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import './App.css';
import Logo from './img/image2.jpeg';
import Background1 from './img/image5.jpeg';
import Background2 from './img/image4.jpeg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar background="black" text="white" hovercolor="#d9d9db" logo={Logo}/>
        <Router background="black" text="white" hovercolor="#d9d9db" backgroundImage={Background1}/>
        <Footer background="black" text="white" hovercolor="#d9d9db"/>
      </div>
    );
  }
}

export default App;
