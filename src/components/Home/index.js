import React, { Component } from 'react';
import PrimeNow from '../../img/prime.jpg';
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
          <p id="test">Deliver unto us the Pizza</p>
          <a href="https://www.amazon.com/restaurants/brick-and-motor-portland/d/B079J6MDKB?ref_=amzrst_b_B079J6MDKB_20" target="_blank" ><img src={PrimeNow} alt='amazon restaurant delivery' id="primeLogo"></img></a>
        </section>
        <section className='section parallax bg2'>
        </section>
      </main>
    );
  }
}

export default Home;
