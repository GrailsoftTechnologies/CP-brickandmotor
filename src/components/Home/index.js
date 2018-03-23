import React, { Component } from 'react';
import './styles.css';


class Home extends Component {
  render() {
    return (
      <main className='wrapper'>
        <section className='section parallax bg1'>
          <h1>BRICK</h1>
          <h2>AND</h2>
          <h1>MOTOR</h1>
          <h2>WOOD FIRED PIZZA</h2>
        </section>
        <section className='section static'>
          <h1>PIZZA?</h1>
        </section>
        <section className='section parallax bg2'>
        </section>
      </main>
    );
  }
}

export default Home;
