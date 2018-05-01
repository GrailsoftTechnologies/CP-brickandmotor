import React, { Component } from 'react';
import './styles.css';

class Menu extends Component {
render() {
  return(
    <main className='wrapper'>
      <section>
        <div className="lineStyle1">|BRICK AND MOTOR|</div>
        <div className="lineStyle6">TEXT [971] 998 - 6575 TO ORDER</div>
        <div className="lineStyle1">DELIVERED TO YOUR TABLE</div>
        <div className="lineStyle2">|WOOD FIRED PIZZA|</div>
        <div className="lineStyle2">|10 WHOLE PIES|</div>
        <div className="lineStyle2">9 CHEESE/MARG    11 PEPPERONI</div>
        <div className="lineStyle2">12 VEGGI SPECIAL    13 MEAT SPECIAL</div>
        <div className="lineStyle2">|HALF PIE SLICES|</div>
        <div className="lineStyle2">5 CHEESE    6 PEPPERONI</div>
        <div className="lineStyle2">|SIDES|</div>
        <div className="lineStyle2">5 BREAD STICKS</div>
        <div className="lineStyle2">4 CAESAR    4 CAPRESE</div>
        <div className="lineStyle2">|HOURS|</div>
        <div className="lineStyle2">WED - THURS 4 PM - 1 AM</div>
        <div className="lineStyle2">FRI - SAT 4 PM - 230 AM</div>
        <div className="lineStyle2">SUN 4 PM - 12 AM</div>
      </section>
    </main>
    );
  }
}

export default Menu;
