import React, { Component } from 'react';
import PrimeNow from '../../img/prime.jpg';
import './styles.css';


class Home extends Component {
  render() {
    return (
      <main className='wrapper'>
        <section className='section parallax bg1'>
          <div className="lineStyle1">BRICK</div>
          <div className="lineStyle2">AND</div>
          <div className="lineStyle1">MOTOR</div>
          <div className="lineStyle2">WOOD FIRED PIZZA</div>
        </section>
        <section className='section static'>
        </section>
        <section className='section parallax bg2'>
          <div className="lineStyle2">PIZZA?</div>
          <p id="test">Deliver unto us the Pizza</p>
          <a href="https://www.amazon.com/restaurants/brick-and-motor-portland/d/B079J6MDKB?ref_=amzrst_b_B079J6MDKB_20" target="_blank" ><img src={PrimeNow} alt='amazon restaurant delivery' id="primeLogo"></img></a>
          <div className="lineStyle2">PIZZA?</div>
        </section>
      </main>
    );
  }
}

export default Home;
