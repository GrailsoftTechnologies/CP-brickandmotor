import React, { Component } from 'react';
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
          <div className="lineStyle3">CALL</div>
          <div className="lineStyle3">FIND</div>
          <div className="lineStyle3">ORDER</div>
        </section>
        <section className='section parallax bg2'>
          <div className="lineStyle2">PIZZA?</div>
          <div className="lineStyle2">PIZZA?</div>
        </section>
      </main>
    );
  }
}

export default Home;
