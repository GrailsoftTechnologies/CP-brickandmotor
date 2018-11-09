import React, { Component } from 'react';
import ParallaxPage from './components/ParallaxPage';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import './App.css';
import Logo from './img/image2.jpeg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar background="black" text="white" hovercolor="#d9d9db" logo={Logo}/>
        <ParallaxPage background="black" text="white" hovercolor="#d9d9db"/>
        <Footer background="black" text="white" hovercolor="#d9d9db"/>
      </div>
    );
  }
}

export default App;
